"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { EnquiryModalContext } from "./EnquiryModalContext";
import EnquiryModal from "./EnquiryModal";

const AUTO_OPEN_KEY = "sks-enquiry-modal-auto-shown";
const AUTO_OPEN_DELAY_MS = 5000;

export default function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(AUTO_OPEN_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private mode etc.) — skip auto-open rather than throw.
      return;
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      } catch {
        // ignore
      }
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={close} />
    </EnquiryModalContext.Provider>
  );
}
