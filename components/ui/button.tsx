import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "default" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:opacity-90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent/50 hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-background-subtle",
};

const sizes: Record<Size, string> = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<
    ComponentProps<typeof Link>,
    "href"
  >) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
