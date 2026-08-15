import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  icon?: boolean;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent-strong text-white hover:bg-[#ff1a12] shadow-[0_12px_40px_rgba(225,6,0,0.28)]",
  secondary:
    "bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_12px_40px_rgba(255,255,255,0.12)]",
  ghost:
    "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/30",
  gold: "bg-gold text-zinc-950 hover:bg-[#dbb63a] shadow-[0_12px_40px_rgba(201,162,39,0.25)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  icon = false,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 rounded-full font-semibold whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 dark:bg-white/15">
          <ArrowUpRight weight="bold" className="h-4 w-4" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
