"use client";

import { CalendarClock, Check, CircleAlert, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArabicText } from "@/components/i18n/ArabicText";
import { arabic } from "@/lib/i18n/content";
import { useLanguage } from "@/lib/i18n/language-context";

export function PackageSection() {
  const { t } = useLanguage();

  return (
    <section
      id="package"
      className="scroll-mt-20 border-y border-gold/20 bg-ivory-deep"
      aria-labelledby="package-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-px w-8 bg-gold" aria-hidden />
            {t.package.eyebrow}
            <span className="h-px w-8 bg-gold" aria-hidden />
          </p>
          <h2
            id="package-heading"
            className="mt-5 font-serif text-4xl leading-tight text-emerald-deep sm:text-5xl"
          >
            {t.package.title}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article
              className="h-full rounded-3xl border border-emerald/15 border-t-4 border-t-emerald bg-ivory p-8 shadow-[0_24px_60px_-40px_rgba(11,61,46,0.5)] sm:p-10"
              aria-labelledby="inclusions-heading"
            >
              <div className="flex items-center gap-3 text-emerald">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald/10">
                  <ShieldCheck size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3
                  id="inclusions-heading"
                  className="font-serif text-2xl text-emerald-deep"
                >
                  {t.package.inclusionsTitle}
                </h3>
              </div>
              <ul className="mt-6 divide-y divide-gold/20">
                {t.package.inclusions.map((item, index) => (
                  <li key={item} className="flex gap-3 py-3.5">
                    <Check
                      size={18}
                      strokeWidth={2}
                      className="mt-1 shrink-0 text-gold-deep"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="leading-7 text-charcoal/90">{item}</p>
                      <ArabicText className="text-base text-charcoal/70">
                        {arabic.package.inclusions[index]}
                      </ArabicText>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <aside
              className="flex h-full flex-col rounded-3xl border border-emerald/15 border-t-4 border-t-gold bg-ivory p-8 shadow-[0_24px_60px_-40px_rgba(11,61,46,0.5)] sm:p-10"
              aria-labelledby="details-heading"
            >
              <div className="flex items-center gap-3 text-gold-deep">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <CalendarClock size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3
                  id="details-heading"
                  className="font-serif text-2xl text-emerald-deep"
                >
                  {t.package.detailsTitle}
                </h3>
              </div>
              <dl className="mt-6 divide-y divide-gold/25 border-y border-gold/25">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-5">
                  <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/65">
                    {t.package.priceLabel}
                  </dt>
                  <dd className="font-serif text-4xl text-emerald-deep">
                    {t.package.priceValue}
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-5">
                  <dt className="text-xs uppercase tracking-[0.2em] text-charcoal/65">
                    {t.package.deadlineLabel}
                  </dt>
                  <dd className="font-serif text-2xl text-emerald-deep">
                    {t.package.deadlineValue}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 flex gap-3 rounded-2xl border border-dashed border-gold/55 bg-gold/10 p-4 text-sm leading-6 text-charcoal/80">
                <CircleAlert
                  size={18}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-gold-deep"
                  aria-hidden
                />
                {t.package.termsNote}
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
