import React from "react";
import Badge from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "navy" | "orange" | "green" | "yellow" | "slate";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  darkBackground?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeVariant = "orange",
  title,
  subtitle,
  align = "center",
  darkBackground = false,
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${darkBackground ? "text-white" : "text-[#031B3D]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${darkBackground ? "text-slate-300" : "text-[#5C6470]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
