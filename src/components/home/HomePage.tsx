"use client";

import { MotionConfig } from "framer-motion";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { GallerySection } from "@/components/home/GallerySection";
import { HeroSection } from "@/components/home/HeroSection";
import { PackageSection } from "@/components/home/PackageSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LanguageProvider, useLanguage } from "@/lib/i18n/language-context";

function HomePageContent() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-full flex-col bg-ivory text-charcoal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-emerald focus:px-4 focus:py-2 focus:text-ivory"
      >
        {t.skipToContent}
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <GallerySection />
        <PackageSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export function HomePage() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <HomePageContent />
      </MotionConfig>
    </LanguageProvider>
  );
}
