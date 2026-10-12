"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import type { Language } from "@/lib/i18n/content";

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#package", label: t.nav.package },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/95 shadow-[0_1px_0_rgba(196,165,116,0.15)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="max-w-[11rem] font-serif text-lg font-semibold leading-tight text-emerald-deep sm:max-w-none sm:text-xl"
        >
          {t.siteName}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.siteName}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm tracking-wide text-emerald-deep/80 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-emerald-deep hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch
            language={language}
            onChange={setLanguage}
            enLabel={t.language.en}
            filLabel={t.language.fil}
            groupLabel={t.language.label}
          />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-emerald lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            <span className="sr-only">{open ? t.menu.close : t.menu.open}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-navigation"
            className="overflow-hidden border-t border-gold/20 bg-ivory px-5 py-4 lg:hidden"
            aria-label={t.siteName}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-3 font-serif text-lg text-emerald-deep hover:bg-emerald/5"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function LanguageSwitch({
  language,
  onChange,
  enLabel,
  filLabel,
  groupLabel,
}: {
  language: Language;
  onChange: (language: Language) => void;
  enLabel: string;
  filLabel: string;
  groupLabel: string;
}) {
  const options: { value: Language; label: string }[] = [
    { value: "en", label: enLabel },
    { value: "fil", label: filLabel },
  ];

  return (
    <div
      className="inline-flex rounded-full border border-gold/45 bg-ivory p-1"
      role="group"
      aria-label={groupLabel}
    >
      {options.map((option) => {
        const selected = language === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={`min-h-9 rounded-full px-3 text-xs font-medium tracking-wide transition-colors ${
              selected
                ? "bg-emerald-deep text-ivory shadow-[inset_0_0_0_1px_rgba(196,165,116,0.6)]"
                : "text-emerald-deep/70 hover:text-emerald-deep"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
