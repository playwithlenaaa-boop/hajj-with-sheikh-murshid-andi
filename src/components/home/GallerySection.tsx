"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { galleryPhotos } from "@/lib/gallery";
import { ArabicText } from "@/components/i18n/ArabicText";
import { arabic } from "@/lib/i18n/content";
import { useLanguage } from "@/lib/i18n/language-context";

const EDGE_TOLERANCE = 4;

export function GallerySection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > EDGE_TOLERANCE);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - EDGE_TOLERANCE);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const total = galleryPhotos.length;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-ivory"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <FadeIn className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" aria-hidden />
              {t.gallery.eyebrow}
            </p>
            <h2
              id="gallery-heading"
              className="mt-5 font-serif text-4xl leading-tight text-emerald-deep sm:text-5xl"
            >
              {t.gallery.title}
            </h2>
            <ArabicText className="mt-3 text-2xl text-gold-deep">
              {arabic.gallery.title}
            </ArabicText>
            <p className="mt-6 text-lg leading-8 text-charcoal/85">
              {t.gallery.intro}
            </p>
            <ArabicText className="mt-3 text-lg text-charcoal/75">
              {arabic.gallery.intro}
            </ArabicText>
          </div>

          <div className="flex shrink-0 gap-3">
            <GalleryButton
              label={t.gallery.previous}
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft size={20} strokeWidth={1.75} aria-hidden />
            </GalleryButton>
            <GalleryButton
              label={t.gallery.next}
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight size={20} strokeWidth={1.75} aria-hidden />
            </GalleryButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul
            ref={scrollerRef}
            tabIndex={0}
            aria-label={t.gallery.regionLabel}
            className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-6 [scrollbar-color:rgba(196,165,116,0.6)_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:gap-6"
          >
            {galleryPhotos.map((photo, index) => (
              <li
                key={photo.id}
                className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/2.4)]"
              >
                <figure className="rounded-3xl border border-gold/35 bg-ivory-deep p-2.5 shadow-[0_24px_60px_-42px_rgba(11,61,46,0.55)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald/10">
                    <Image
                      src={photo.src}
                      alt={t.gallery.photos[photo.id]}
                      fill
                      sizes="(min-width: 1152px) 440px, (min-width: 1024px) 38vw, (min-width: 640px) 60vw, 85vw"
                      className="object-cover"
                      style={{ objectPosition: photo.objectPosition }}
                    />
                  </div>
                  <figcaption className="flex items-center gap-3 px-2 pb-1 pt-3 text-xs tracking-[0.2em] text-gold-deep">
                    <span className="h-px w-6 bg-gold/60" aria-hidden />
                    <span aria-hidden>
                      {pad(index + 1)} / {pad(total)}
                    </span>
                    <span className="sr-only">
                      {t.gallery.photoCount
                        .replace("{current}", String(index + 1))
                        .replace("{total}", String(total))}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function GalleryButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ivory text-emerald-deep transition-colors hover:bg-emerald-deep hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-ivory disabled:hover:text-emerald-deep"
    >
      {children}
    </button>
  );
}
