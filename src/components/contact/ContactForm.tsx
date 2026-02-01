"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { FormField } from "@/components/ui/FormField";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("idle");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error("Web3Forms access key is not configured");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${data.firstName} ${data.lastName}`.trim(),
          email: data.email,
          subject: data.subject || "Contact Form Submission",
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result?.success) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <div className="bg-warm-50 rounded-xl p-6 md:p-8 border border-warm-200">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Send us a message</h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0" />
          <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-red-600 mr-3 shrink-0" />
          <p className="text-red-700">Something went wrong. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="firstName"
            label="First Name"
            placeholder="John"
            required
            register={register("firstName")}
            error={errors.firstName}
          />
          <FormField
            id="lastName"
            label="Last Name"
            placeholder="Doe"
            required
            register={register("lastName")}
            error={errors.lastName}
          />
        </div>

        <FormField
          id="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
          register={register("email")}
          error={errors.email}
        />

        <FormField
          id="subject"
          label="Subject"
          placeholder="How can we help you?"
          register={register("subject")}
          error={errors.subject}
        />

        <FormField
          id="message"
          label="Your Message"
          type="textarea"
          placeholder="Tell us about your project..."
          required
          rows={5}
          register={register("message")}
          error={errors.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-burgundy hover:bg-burgundy-dark text-white px-6 py-3 rounded-lg
            font-medium transition-colors flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
