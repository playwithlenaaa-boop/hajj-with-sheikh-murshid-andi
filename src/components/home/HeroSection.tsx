"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { ArabicText } from "@/components/i18n/ArabicText";
import { arabic } from "@/lib/i18n/content";
import { useLanguage } from "@/lib/i18n/language-context";
import { FramedImage } from "./FramedImage";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-emerald-deep text-ivory"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(196,165,116,0.16),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(19,78,58,0.9),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <FadeIn>
          <p
            lang="ar"
            dir="rtl"
            className="mb-6 inline-block font-arabic text-xl leading-[2] text-gold sm:text-2xl"
          >
            {arabic.greeting}
          </p>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/70" aria-hidden />
            {t.hero.kicker}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 max-w-xl font-serif text-[2.5rem] leading-[1.1] text-ivory sm:text-5xl lg:text-6xl"
          >
            {t.hero.headline}
          </h1>
          <ArabicText className="mt-4 max-w-xl text-2xl text-gold/90 sm:text-3xl">
            {arabic.hero.headline}
          </ArabicText>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ivory/80">
            {t.hero.supporting}
          </p>
          <ArabicText className="mt-3 max-w-lg text-lg text-ivory/70">
            {arabic.hero.supporting}
          </ArabicText>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-medium text-emerald-deep transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/35 px-7 text-sm font-medium text-ivory transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-ivory/15 pt-6">
            <span className="font-serif text-4xl leading-none text-gold">
              2016
            </span>
            <span className="h-8 w-px bg-gold/40" aria-hidden />
            <p className="text-sm leading-6 tracking-wide text-ivory/85">
              {t.hero.highlight}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <FramedImage
            src="/hero/kaaba-hero.png"
            alt={t.hero.imageAlt}
            tone="dark"
            objectPosition="55% 50%"
            preload
          />
        </FadeIn>
      </div>
    </section>
  );
}
