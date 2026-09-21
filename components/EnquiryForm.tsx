"use client";

import { useState, type FormEvent } from "react";
import { CLASS_OPTIONS } from "@/config/constants";

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
  if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

interface EnquiryFormProps {
  compact?: boolean;
}

export default function EnquiryForm({ compact = false }: EnquiryFormProps) {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

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
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex flex-col items-center justify-center rounded-3xl bg-leaf-50 px-6 py-10 text-center ${
          compact ? "" : "shadow-soft"
        }`}
      >
        <span className="text-4xl" aria-hidden="true">
          🎉
        </span>
        <h3 className="mt-3 font-heading text-xl font-bold text-leaf-700">Enquiry Received!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-900/70">{serverMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-full border-2 border-leaf-500 px-5 py-2 text-sm font-bold text-leaf-700 transition hover:bg-leaf-100"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-3xl bg-white p-5 sm:p-7 ${compact ? "" : "shadow-soft"}`}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Parent's Name"
          htmlFor="parentName"
          error={errors.parentName}
        >
          <input
            id="parentName"
            name="parentName"
            type="text"
            autoComplete="name"
            value={values.parentName}
            onChange={(e) => handleChange("parentName", e.target.value)}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
            className={inputClass(Boolean(errors.parentName))}
            placeholder="e.g. Priya Sharma"
          />
        </Field>

        <Field label="Child's Name" htmlFor="childName" error={errors.childName}>
          <input
            id="childName"
            name="childName"
            type="text"
            value={values.childName}
            onChange={(e) => handleChange("childName", e.target.value)}
            aria-invalid={Boolean(errors.childName)}
            aria-describedby={errors.childName ? "childName-error" : undefined}
            className={inputClass(Boolean(errors.childName))}
            placeholder="e.g. Aarav Sharma"
          />
        </Field>

        <Field label="Class / Stage Seeking Admission" htmlFor="classSeeking" error={errors.classSeeking}>
          <select
            id="classSeeking"
            name="classSeeking"
            value={values.classSeeking}
            onChange={(e) => handleChange("classSeeking", e.target.value)}
            aria-invalid={Boolean(errors.classSeeking)}
            aria-describedby={errors.classSeeking ? "classSeeking-error" : undefined}
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

        <Field label="Mobile Number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(Boolean(errors.phone))}
            placeholder="10-digit mobile number"
          />
        </Field>

        <Field label="Email Address" htmlFor="email" error={errors.email} full>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-coral-50 px-4 py-3 text-sm font-semibold text-coral-600">
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-coral-500 px-6 py-3.5 text-base font-bold text-white shadow-soft transition hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Get Fee Structure & Call Back"}
      </button>

      <p className="mt-3 text-center text-xs text-ink-900/50">
        We respect your privacy. Your details are only used to contact you about admissions.
      </p>
    </form>
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
  full = false,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-900">
        {label}
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
