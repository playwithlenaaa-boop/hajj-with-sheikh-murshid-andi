"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { ArabicText } from "@/components/i18n/ArabicText";
import { arabic } from "@/lib/i18n/content";
import { useLanguage } from "@/lib/i18n/language-context";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-emerald-deep text-ivory"
      aria-labelledby="experience-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(196,165,116,0.14),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-28">
        <FadeIn>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/70" aria-hidden />
            {t.experience.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="mt-5 max-w-xl font-serif text-4xl leading-tight text-ivory sm:text-5xl"
          >
            {t.experience.title}
          </h2>
          <ArabicText className="mt-3 max-w-xl text-2xl text-gold/90">
            {arabic.experience.title}
          </ArabicText>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-ivory/85">
            {t.experience.paragraphs.map((paragraph, index) => (
              <div key={paragraph} className="space-y-2">
                <p>{paragraph}</p>
                <ArabicText className="text-ivory/70">
                  {arabic.experience.paragraphs[index]}
                </ArabicText>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:self-center">
          <dl className="divide-y divide-gold/25 rounded-3xl border border-gold/35 bg-ivory/5">
            {t.experience.highlights.map((item, index) => (
              <div key={item.value} className="flex flex-col p-7 sm:p-8">
                <dt className="order-2 mt-2 text-sm leading-6 tracking-wide text-ivory/80">
                  {item.label}
                </dt>
                <dd className="order-1 font-serif text-3xl leading-tight text-gold sm:text-4xl">
                  {item.value}
                </dd>
                <ArabicText
                  as="dd"
                  className="order-3 mt-2 text-base text-ivory/70"
                >
                  {arabic.experience.highlights[index]}
                </ArabicText>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
