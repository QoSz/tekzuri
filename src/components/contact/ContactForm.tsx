"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { FormField } from "@/components/ui/FormField";
import { submitContactForm } from "@/app/actions";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus("success");
        reset();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" />
          <p className="text-green-300">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-red-400 mr-3 shrink-0" />
          <p className="text-red-300">Something went wrong. Please try again.</p>
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="space-y-5" noValidate>
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
          className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg
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
