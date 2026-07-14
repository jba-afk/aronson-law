import Link from "next/link";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--aronson-garnet)] px-8 py-4 text-base font-bold uppercase tracking-[0.12em] !text-white no-underline transition-all duration-300 hover:bg-[#7a1c29] hover:!text-white hover:shadow-lg ${className}`}
    >
      {children}
    </Link>
  );
}