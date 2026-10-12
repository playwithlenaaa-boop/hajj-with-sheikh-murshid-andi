import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  tone?: "light" | "dark";
  objectPosition?: string;
  preload?: boolean;
  className?: string;
};

export function FramedImage({
  src,
  alt,
  tone = "light",
  objectPosition = "center",
  preload = false,
  className = "",
}: FramedImageProps) {
  const dark = tone === "dark";

  return (
    <figure
      className={`relative mx-auto w-full max-w-md rounded-t-[999px] rounded-b-3xl border p-3 ${
        dark ? "border-gold/40 bg-ivory/5" : "border-gold/35 bg-ivory"
      } ${className}`}
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-2xl ${
          dark ? "bg-emerald" : "bg-ivory-deep"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 448px, (min-width: 480px) 448px, 92vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        <div
          className={`pointer-events-none absolute inset-5 rounded-t-[999px] rounded-b-xl border ${
            dark ? "border-gold/45" : "border-ivory/60"
          }`}
          aria-hidden
        />
      </div>
    </figure>
  );
}
