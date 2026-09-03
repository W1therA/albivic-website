import Image from "next/image";

type BrandMarkProps = {
  variant?: "dark" | "light";
  className?: string;
};

/** Gemini house mark + wordmark beside it */
export function BrandMark({ variant = "dark", className = "" }: BrandMarkProps) {
  const onDark = variant === "light";
  const text = onDark ? "text-cream" : "text-charcoal";
  const sub = onDark ? "text-cream/80" : "text-charcoal/70";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md ${
          onDark ? "bg-cream/95 p-1 shadow-sm" : ""
        }`}
      >
        <Image
          src={
            onDark
              ? "/images/brand/logo-mark-solid-80.png"
              : "/images/brand/logo-mark-96.png"
          }
          alt=""
          width={56}
          height={48}
          className="h-9 w-auto md:h-10"
          priority
        />
      </span>
      <span className={`leading-none ${text}`}>
        <span className="block font-display text-sm font-bold uppercase tracking-[0.14em] md:text-base">
          Albivic
        </span>
        <span className={`mt-1 block text-[9px] font-normal tracking-[0.08em] md:text-[10px] ${sub}`}>
          Construction LTD
        </span>
      </span>
    </span>
  );
}

export function AlbivicLogo({
  className = "",
  width = 96,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <Image
      src="/images/brand/logo-mark-128.png"
      alt="Albivic Construction LTD"
      width={width}
      height={Math.round(width * 0.85)}
      className={`h-auto w-auto ${className}`}
    />
  );
}
