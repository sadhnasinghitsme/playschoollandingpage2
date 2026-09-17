"use client";

import type { ButtonHTMLAttributes } from "react";
import { useEnquiryModal } from "./EnquiryModalContext";

type EnquireTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function EnquireTrigger({ children, onClick, ...rest }: EnquireTriggerProps) {
  const { open } = useEnquiryModal();

  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        open();
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
