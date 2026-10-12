"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { ArabicText } from "@/components/i18n/ArabicText";
import { arabic } from "@/lib/i18n/content";
import { useLanguage } from "@/lib/i18n/language-context";
import { FramedImage } from "./FramedImage";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-ivory"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <FadeIn className="order-2 lg:order-1">
          <FramedImage
            src="/portraits/sheikh-murshid-andi.png"
            alt={t.about.imageAlt}
            objectPosition="38% 30%"
          />
        </FadeIn>
        <FadeIn delay={0.08} className="order-1 lg:order-2">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-px w-8 bg-gold" aria-hidden />
            {t.about.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="mt-5 font-serif text-4xl leading-tight text-emerald-deep sm:text-5xl"
          >
            {t.about.title}
          </h2>
          <p className="mt-8 max-w-xl border-l-2 border-gold/60 pl-6 text-lg leading-9 text-charcoal/90">
            {t.about.body}
          </p>
          <ArabicText className="mt-6 max-w-xl border-r-2 border-gold/60 pr-6 text-lg text-charcoal/85">
            {arabic.about.body}
          </ArabicText>
        </FadeIn>
      </div>
    </section>
  );
}
