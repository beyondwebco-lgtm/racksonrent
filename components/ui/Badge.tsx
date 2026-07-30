import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "orange" | "green" | "yellow" | "slate" | "brand";
  className?: string;
}

export default function Badge({
  children,
  variant = "brand",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-[#84D2F6]/20 text-[#133C55] border-[#59A5D8]/40",
    navy: "bg-[#133C55]/10 text-[#133C55] border-[#133C55]/20",
    orange: "bg-[#59A5D8]/20 text-[#133C55] border-[#386FA4]/30",
    green: "bg-[#84D2F6]/30 text-[#133C55] border-[#59A5D8]/40",
    yellow: "bg-[#84D2F6]/30 text-[#133C55] border-[#59A5D8]/40",
    slate: "bg-[#EEF3F7] text-[#5F7483] border-[#D8E3EC]",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
