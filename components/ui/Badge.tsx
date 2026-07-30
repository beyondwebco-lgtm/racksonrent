import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "orange" | "green" | "yellow" | "slate";
  className?: string;
}

export default function Badge({
  children,
  variant = "navy",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    navy: "bg-[#062A5E]/10 text-[#062A5E] border-[#062A5E]/20",
    orange: "bg-[#FF6500]/10 text-[#FF6500] border-[#FF6500]/20",
    green: "bg-[#157A3D]/10 text-[#157A3D] border-[#157A3D]/20",
    yellow: "bg-[#FFC928]/20 text-[#855B00] border-[#FFC928]/40",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
