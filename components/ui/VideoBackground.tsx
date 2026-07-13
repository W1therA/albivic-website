"use client";

import { useEffect, useRef, useState } from "react";

type VideoBackgroundProps = {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
};

export function VideoBackground({
  src,
  poster,
  className = "",
  overlayClassName = "bg-charcoal/60",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.play().catch(() => {
      /* autoplay may be blocked; muted should still work */
    });
  }, [reduceMotion, src]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {!reduceMotion ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-charcoal-light" />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
