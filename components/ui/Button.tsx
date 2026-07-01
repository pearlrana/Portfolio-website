"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export type ButtonVariant = "ink" | "ghost" | "outline" | "blush";

const variantStyles: Record<ButtonVariant, string> = {
  // Dark charcoal fill — primary CTA
  ink: [
    "bg-[var(--color-ink)] text-[var(--color-paper)]",
    "hover:bg-[#3d3730]",
    "border border-[var(--color-ink)]",
  ].join(" "),

  // Transparent with charcoal border
  outline: [
    "bg-transparent text-[var(--color-ink)]",
    "border border-[var(--color-hairline)]",
    "hover:border-[var(--color-ink)]",
  ].join(" "),

  // No border, just text — for inline or low-emphasis actions
  ghost: [
    "bg-transparent text-[var(--color-ink-soft)]",
    "hover:text-[var(--color-ink)]",
    "border border-transparent",
  ].join(" "),

  // Dusty-pink fill — for accents / secondary CTAs
  blush: [
    "bg-[var(--color-blush)] text-[var(--color-ink)]",
    "hover:bg-[#cc9ca2]",
    "border border-transparent",
  ].join(" "),
};

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  /** renders as an anchor instead of button */
  href?: string;
  external?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "ink",
      size = "md",
      href,
      external,
      className,
      ...rest
    },
    ref
  ) => {
    const base = cn(
      "inline-flex items-center justify-center rounded-full font-ui font-medium",
      "transition-colors duration-200 cursor-pointer",
      "active:scale-[0.97]",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const motionProps = {
      whileTap: { scale: 0.97 },
      transition: { duration: 0.12 },
    } satisfies Partial<HTMLMotionProps<"button">>;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={base}
          {...(motionProps as object)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} className={base} {...motionProps} {...rest}>
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
