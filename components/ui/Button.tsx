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
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl text-center cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  const variantStyles = {
    primary: "bg-[#FF6500] hover:bg-[#E05800] text-white shadow-md hover:shadow-lg focus:ring-[#FF6500] active:scale-[0.98]",
    secondary: "bg-[#062A5E] hover:bg-[#031B3D] text-white shadow-md focus:ring-[#062A5E] active:scale-[0.98]",
    outline: "border-2 border-[#062A5E] text-[#062A5E] hover:bg-[#062A5E] hover:text-white focus:ring-[#062A5E]",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg focus:ring-[#25D366] active:scale-[0.98]",
    ghost: "bg-transparent text-[#121826] hover:bg-slate-200/60 focus:ring-slate-400",
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
