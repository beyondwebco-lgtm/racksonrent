import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84D2F6] focus-visible:ring-offset-2 text-center cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-[#59A5D8] text-white shadow-xs hover:-translate-y-0.5 hover:bg-[#386FA4] hover:shadow-lg",
    secondary: "border border-[#84D2F6] bg-white text-[#133C55] hover:bg-[#EAF7FF] hover:border-[#59A5D8]",
    outline: "border border-[#59A5D8] text-[#133C55] hover:bg-[#EAF7FF]",
    whatsapp: "bg-[#59A5D8] text-white shadow-xs hover:-translate-y-0.5 hover:bg-[#386FA4] hover:shadow-lg",
    ghost: "bg-transparent text-[#133C55] hover:bg-[#EAF7FF]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={combinedStyles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  );
}
