import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "orange" | "green" | "yellow" | "slate" | "brand";
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-[#EAF7FF] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#386FA4] border border-[#D7EEFA] ${className}`}>
      {children}
    </span>
  );
}
