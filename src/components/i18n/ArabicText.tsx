"use client";

import { useLanguage } from "@/lib/i18n/language-context";

type ArabicTextProps = {
  children: string;
  as?: "p" | "dd" | "span";
  className?: string;
};

export function ArabicText({
  children,
  as: Tag = "p",
  className = "",
}: ArabicTextProps) {
  const { language } = useLanguage();

  if (language !== "en") return null;

  return (
    <Tag lang="ar" dir="rtl" className={`font-arabic leading-[2] ${className}`}>
      {children}
    </Tag>
  );
}
