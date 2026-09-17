"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CLASS_OPTIONS } from "@/config/constants";
import { CloseIcon } from "./icons";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  parentName: string;
  childName: string;
  classSeeking: string;
  phone: string;
  email: string;
}

const INITIAL_STATE: FormState = {
  parentName: "",
  childName: "",
  classSeeking: "",
  phone: "",
  email: "",
};

type Status = "idle" | "loading" | "success" | "error";

const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.parentName.trim()) errors.parentName = "Please enter parent's name.";
  if (!values.childName.trim()) errors.childName = "Please enter child's name.";
  if (!values.classSeeking) errors.classSeeking = "Please select a class/stage.";
  if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }
  if (values.email.trim() && !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Lock body scroll and restore focus on close.
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const target =
      firstFieldRef.current ?? dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    target?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [isOpen]);

  // Esc to close + focus trap.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function resetAndClose() {
    setValues(INITIAL_STATE);
    setErrors({});
    setStatus("idle");
    setServerMessage("");
    onClose();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setServerMessage(data.message || "Something went wrong. Please call us instead.");
        return;
      }

      setStatus("success");
      setServerMessage(data.message || "Thank you! Our admissions team will call you back shortly.");
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/60 p-4"
      onClick={resetAndClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-heading"
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-[92vw] max-w-md overflow-y-auto rounded-3xl bg-white p-5 shadow-soft sm:w-full sm:p-7"
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-sunny-50 text-ink-900 transition hover:bg-sunny-100"
        >
          <CloseIcon width={16} height={16} />
        </button>

        {status === "success" ? (
          <div role="status" className="flex flex-col items-center px-2 py-8 text-center">
            <span className="text-4xl" aria-hidden="true">
              🎉
            </span>
            <h2 id="enquiry-modal-heading" className="mt-3 font-heading text-xl font-bold text-leaf-700">
              Enquiry Received!
            </h2>
            <p className="mt-2 text-sm text-ink-900/70">{serverMessage}</p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-6 rounded-full bg-coral-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-coral-600"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center rounded-full bg-sunny-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-coral-600">
              Admission Enquiry
            </span>
            <h2 id="enquiry-modal-heading" className="mt-3 pr-8 font-heading text-xl font-extrabold text-ink-900 sm:text-2xl">
              Let&apos;s Plan Your Child&apos;s SKS Journey
            </h2>
            <p className="mt-1 text-sm text-ink-900/60">
              Share a few details — our admissions team will call you back shortly.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              <Field label="Parent's Name" htmlFor="modal-parentName" error={errors.parentName} required>
                <input
                  id="modal-parentName"
                  ref={firstFieldRef}
                  type="text"
                  autoComplete="name"
                  value={values.parentName}
                  onChange={(e) => handleChange("parentName", e.target.value)}
                  aria-invalid={Boolean(errors.parentName)}
                  aria-describedby={errors.parentName ? "modal-parentName-error" : undefined}
                  className={inputClass(Boolean(errors.parentName))}
                  placeholder="e.g. Priya Sharma"
                />
              </Field>

              <Field label="Child's Name" htmlFor="modal-childName" error={errors.childName} required>
                <input
                  id="modal-childName"
                  type="text"
                  value={values.childName}
                  onChange={(e) => handleChange("childName", e.target.value)}
                  aria-invalid={Boolean(errors.childName)}
                  aria-describedby={errors.childName ? "modal-childName-error" : undefined}
                  className={inputClass(Boolean(errors.childName))}
                  placeholder="e.g. Aarav Sharma"
                />
              </Field>

              <Field label="Class / Stage Seeking Admission" htmlFor="modal-classSeeking" error={errors.classSeeking} required>
                <select
                  id="modal-classSeeking"
                  value={values.classSeeking}
                  onChange={(e) => handleChange("classSeeking", e.target.value)}
                  aria-invalid={Boolean(errors.classSeeking)}
                  aria-describedby={errors.classSeeking ? "modal-classSeeking-error" : undefined}
                  className={inputClass(Boolean(errors.classSeeking))}
                >
                  <option value="">Select class/stage</option>
                  {CLASS_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Mobile Number" htmlFor="modal-phone" error={errors.phone} required>
                <input
                  id="modal-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "modal-phone-error" : undefined}
                  className={inputClass(Boolean(errors.phone))}
                  placeholder="10-digit mobile number"
                />
              </Field>

              <Field label="Email Address (optional)" htmlFor="modal-email" error={errors.email}>
                <input
                  id="modal-email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "modal-email-error" : undefined}
                  className={inputClass(Boolean(errors.email))}
                  placeholder="you@example.com"
                />
              </Field>

              {status === "error" && (
                <p role="alert" className="rounded-xl bg-coral-50 px-4 py-3 text-sm font-semibold text-coral-600">
                  {serverMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-coral-500 px-6 py-3.5 text-base font-bold text-white shadow-soft transition hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border-2 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-skyplay-500 ${
    hasError ? "border-coral-400" : "border-ink-900/10"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
  required = false,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-900">
        {label}
        {required && (
          <span className="text-coral-500" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1 text-xs font-semibold text-coral-600">
          {error}
        </p>
      )}
    </div>
  );
}
