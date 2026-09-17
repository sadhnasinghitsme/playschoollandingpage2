import { NextRequest, NextResponse } from "next/server";

export interface EnquiryPayload {
  parentName: string;
  childName: string;
  classSeeking: string;
  phone: string;
  email?: string;
}

const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: Partial<EnquiryPayload>): string | null {
  if (!payload.parentName?.trim()) return "Parent name is required.";
  if (!payload.childName?.trim()) return "Child name is required.";
  if (!payload.classSeeking?.trim()) return "Please select the class/stage you're enquiring for.";
  if (!payload.phone || !PHONE_REGEX.test(payload.phone.trim())) {
    return "Please enter a valid 10-digit Indian mobile number.";
  }
  // Email is optional — only validated when provided.
  if (payload.email?.trim() && !EMAIL_REGEX.test(payload.email.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

export async function POST(request: NextRequest) {
  let payload: Partial<EnquiryPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ success: false, message: validationError }, { status: 400 });
  }

  const enquiry: EnquiryPayload = {
    parentName: payload.parentName!.trim(),
    childName: payload.childName!.trim(),
    classSeeking: payload.classSeeking!.trim(),
    phone: payload.phone!.trim(),
    email: payload.email?.trim() || undefined,
  };

  // TODO: Connect this to your existing Node/Express + MongoDB Atlas backend.
  // Two common options:
  //   1. Forward this payload to your Express API, e.g.:
  //        await fetch(process.env.ENQUIRY_API_URL!, {
  //          method: "POST",
  //          headers: { "Content-Type": "application/json" },
  //          body: JSON.stringify({ ...enquiry, source: "landing-page", submittedAt: new Date().toISOString() }),
  //        });
  //   2. Or connect directly to MongoDB Atlas from this route using the official
  //      MongoDB Node.js driver / Mongoose, and insert `enquiry` into your
  //      "admissionEnquiries" collection here.
  // Consider also sending a confirmation email/SMS and/or a notification to staff.

  console.log("New admission enquiry received:", enquiry);

  return NextResponse.json(
    {
      success: true,
      message: "Thank you! Our admissions team will call you back shortly.",
    },
    { status: 200 }
  );
}
