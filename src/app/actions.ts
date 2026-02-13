"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export async function submitContactForm(data: ContactFormData) {
  const validated = contactFormSchema.parse(data);

  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return { success: false, message: "Form service is not configured" };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: `${validated.firstName} ${validated.lastName}`.trim(),
      email: validated.email,
      subject: validated.subject || "Contact Form Submission",
      message: validated.message,
    }),
  });

  const result = await response.json();
  return { success: Boolean(result?.success), message: result?.message ?? "" };
}
