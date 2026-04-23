import { type ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "error" | "gold" | "blush";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, { background: string; color: string }> = {
  default: { background: "rgba(220,103,59,0.08)", color: "var(--color-sage-700)" },
  success: { background: "rgba(220,103,59,0.12)", color: "var(--color-success)" },
  warning: { background: "rgba(249,210,81,0.18)", color: "var(--color-sage-900)" },
  error:   { background: "rgba(181,75,75,0.12)", color: "var(--color-error)" },
  gold:    { background: "rgba(249,210,81,0.18)", color: "var(--color-sage-900)" },
  blush:   { background: "var(--color-blush)", color: "var(--color-text-primary)" },
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  const { background, color } = variantStyles[variant];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${className}`}
      style={{ background, color }}
    >
      {children}
    </span>
  );
}
