"use client";

import { MessageCircle, Phone, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArabicText } from "@/components/i18n/ArabicText";
import { contactDetails as c } from "@/lib/contact";
import { arabic } from "@/lib/i18n/content";
import { useLanguage } from "@/lib/i18n/language-context";

type ContactLink = {
  href: string;
  label: string;
  ariaLabel: string;
  external?: boolean;
};

export function ContactSection() {
  const { t } = useLanguage();
  const withNumber = (text: string, number: string) =>
    text.replace("{number}", number);

  const channels: {
    icon: LucideIcon;
    label: string;
    value: string;
    links: ContactLink[];
  }[] = [
    {
      icon: Phone,
      label: t.contact.phone.label,
      value: c.phoneDisplay,
      links: [
        {
          href: c.phoneHref,
          label: t.contact.phone.call,
          ariaLabel: withNumber(t.contact.phone.callAria, c.phoneDisplay),
        },
        {
          href: c.smsHref,
          label: t.contact.phone.sms,
          ariaLabel: withNumber(t.contact.phone.smsAria, c.phoneDisplay),
        },
      ],
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp.label,
      value: c.whatsappDisplay,
      links: [
        {
          href: c.whatsappHref,
          label: t.contact.whatsapp.action,
          ariaLabel: withNumber(t.contact.whatsapp.aria, c.whatsappDisplay),
          external: true,
        },
      ],
    },
    {
      icon: Share2,
      label: t.contact.facebook.label,
      value: c.facebookDisplay,
      links: [
        {
          href: c.facebookHref,
          label: t.contact.facebook.action,
          ariaLabel: t.contact.facebook.aria,
          external: true,
        },
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-emerald text-ivory"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <FadeIn className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/70" aria-hidden />
            {t.contact.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-5xl"
          >
            {t.contact.title}
          </h2>
          <ArabicText className="mt-3 text-2xl text-gold/90">
            {arabic.contact.title}
          </ArabicText>
          <p className="mt-5 leading-8 text-ivory/80">{t.contact.intro}</p>
          <ArabicText className="mt-3 text-lg text-ivory/70">
            {arabic.contact.intro}
          </ArabicText>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {channels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <FadeIn key={channel.label} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-3xl border border-gold/30 bg-emerald-deep/60 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Icon size={20} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-ivory">
                    {channel.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-ivory/80 [overflow-wrap:anywhere]">
                    {channel.value}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {channel.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        aria-label={link.ariaLabel}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/50 px-5 text-sm font-medium text-ivory transition-colors hover:bg-gold hover:text-emerald-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
