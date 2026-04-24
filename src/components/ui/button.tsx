import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "danger";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase text-sm",
          {
            "bg-slate-900 text-white hover:bg-slate-800": variant === "default",
            "border border-slate-300 bg-white hover:bg-slate-50 text-slate-900": variant === "outline",
            "hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
            "text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 rounded-none padding-0 !normal-case tracking-normal font-medium": variant === "link",
            "bg-red-600 text-white hover:bg-red-700": variant === "danger",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3 text-xs": size === "sm",
            "h-12 px-8": size === "lg",
            "h-10 w-10 !px-0 rounded-sm": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
