"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/** Adds `is-visible` the first time the element scrolls into view. */
function useRevealRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No observer support → just show it.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
  style?: CSSProperties;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRevealRef<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      className={cn(className)}
      style={{ "--reveal-delay": `${delay * 0.08}s`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Staggered container: children (RevealItem) reveal in sequence. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={cn(className)}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<{ style?: CSSProperties }>;
        return cloneElement(el, {
          style: {
            "--reveal-delay": `${i * stagger}s`,
            ...(el.props.style ?? {}),
          } as CSSProperties,
        });
      })}
    </div>
  );
}

export function RevealItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRevealRef<HTMLDivElement>();
  return (
    <div ref={ref} data-reveal="" className={cn(className)} style={style}>
      {children}
    </div>
  );
}
