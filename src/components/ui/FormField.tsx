import { AlertCircle } from "lucide-react";
import type { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  rows = 5,
  register,
  error,
}: FormFieldProps) {
  const baseClasses = `w-full px-4 py-3 bg-warm-50 border rounded-lg
    focus:ring-2 focus:outline-none transition-colors
    placeholder:text-gray-400
    text-gray-900`;

  const stateClasses = error
    ? "border-red-400 focus:ring-red-200 focus:border-red-400"
    : "border-warm-200 focus:ring-burgundy/20 focus:border-burgundy";

  const inputClasses = `${baseClasses} ${stateClasses}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-burgundy">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputClasses} resize-none`}
          {...register}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClasses}
          {...register}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 flex items-center">
          <AlertCircle className="h-3.5 w-3.5 mr-1 shrink-0" />
          {error.message}
        </p>
      )}
    </div>
  );
}
