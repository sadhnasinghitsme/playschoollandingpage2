"use client";

import { createContext, useContext } from "react";

export interface EnquiryModalContextValue {
  open: () => void;
  close: () => void;
}

export const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function useEnquiryModal(): EnquiryModalContextValue {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return ctx;
}
