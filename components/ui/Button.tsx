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
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59A5D8] focus-visible:ring-offset-2 rounded-xl text-center cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  };

  const variantStyles = {
    primary: "bg-[#386FA4] hover:bg-[#133C55] text-white shadow-md hover:shadow-lg active:scale-[0.98]",
    secondary: "border border-[#386FA4] bg-white text-[#133C55] hover:bg-[#84D2F6]/20 shadow-xs",
    outline: "border border-[#59A5D8] text-[#133C55] hover:bg-[#386FA4] hover:text-white",
    whatsapp: "bg-[#386FA4] hover:bg-[#133C55] text-white shadow-md hover:shadow-lg active:scale-[0.98]",
    ghost: "bg-transparent text-[#102A3A] hover:bg-[#EEF3F7]",
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
