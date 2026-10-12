import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  caption: string;
  tone?: "light" | "dark";
  className?: string;
};

const PATTERN =
  "bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1.5px)] bg-[length:22px_22px]";

export function ImagePlaceholder({
  label,
  caption,
  tone = "light",
  className = "",
}: ImagePlaceholderProps) {
  const dark = tone === "dark";

  return (
    <figure
      className={`relative mx-auto w-full max-w-md rounded-t-[999px] rounded-b-3xl border p-3 ${
        dark ? "border-gold/40 bg-ivory/5" : "border-gold/35 bg-ivory"
      } ${className}`}
    >
      <div
        className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-t-[999px] rounded-b-2xl ${
          dark
            ? "bg-gradient-to-b from-emerald to-emerald-deep text-gold/25"
            : "bg-gradient-to-b from-ivory-deep to-[#e6d9bd] text-emerald/15"
        }`}
        role="img"
        aria-label={`${label}. ${caption}`}
      >
        <div className={`absolute inset-0 ${PATTERN}`} aria-hidden />
        <div
          className={`absolute inset-5 rounded-t-[999px] rounded-b-xl border ${
            dark ? "border-gold/30" : "border-gold/45"
          }`}
          aria-hidden
        />
        <div className="relative z-10 flex max-w-[15rem] flex-col items-center px-6 text-center">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full border ${
              dark
                ? "border-gold/50 text-gold"
                : "border-gold/60 text-gold-deep"
            }`}
            aria-hidden
          >
            <ImageIcon size={20} strokeWidth={1.5} />
          </span>
          <p
            className={`mt-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] ${
              dark ? "text-gold" : "text-gold-deep"
            }`}
          >
            {label}
          </p>
          <p
            className={`mt-3 text-sm leading-6 ${
              dark ? "text-ivory/75" : "text-charcoal/70"
            }`}
          >
            {caption}
          </p>
        </div>
      </div>
    </figure>
  );
}
