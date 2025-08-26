import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string
  error?: string | null
  onChange?: (value: string) => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, id, error, onChange, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          aria-invalid={!!error}
          className={cn(
            "border rounded-md px-3 py-2 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = "Input"