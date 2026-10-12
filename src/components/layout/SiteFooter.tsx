"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gold/30 bg-emerald-deep text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-lg">{t.siteName}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ivory/75">
            {t.footer.note}
          </p>
        </div>
        <p className="text-xs tracking-wide text-ivory/60">© 2026</p>
      </div>
    </footer>
  );
}
