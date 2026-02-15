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
  const baseClasses = `w-full px-4 py-3 bg-[#161619] border rounded-md
    focus-visible:ring-2 focus-visible:outline-none transition-colors duration-200
    placeholder:text-muted
    text-foreground`;

  const stateClasses = error
    ? "border-red-400/50 focus-visible:ring-red-500/20 focus-visible:border-red-400"
    : "border-[rgba(255,255,255,0.06)] focus-visible:ring-white/10 focus-visible:border-[rgba(255,255,255,0.24)]";

  const inputClasses = `${baseClasses} ${stateClasses}`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#a0a0a8] mb-2">
        {label} {required ? <span className="text-[#f0f0f2]">*</span> : null}
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
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400 flex items-center">
          <span className="text-red-400 text-sm font-medium mr-1 shrink-0">!</span>
          {error.message}
        </p>
      )}
    </div>
  );
}
