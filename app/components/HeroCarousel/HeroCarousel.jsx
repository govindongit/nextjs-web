"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCarousel({ interval = 3000 }) {
  const slides = [
    {
      id: 1,
      desktop: "/img/hero/hey-honey-crop-top-mocha-muse-desk.webp",
      mobile: "/img/hero/hey-honey-crop-top-mocha-muse-mobile.webp",
      alt: "Hero slide 1",
    },
    {
      id: 2,
      desktop: "/img/hero/turqtang-in-full-bloom-crop-top (1).webp",
      mobile: "/img/hero/turqtang-in-full-bloom-crop-top (2).webp",
      alt: "Hero slide 2",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(t);
  }, [interval, slides.length]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Desktop images (hidden on small screens) */}
        <div className="hidden md:block w-full h-[420px] relative overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={s.desktop}
                alt={s.alt}
                fill
                sizes="(min-width: 768px) 1600px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Mobile images (shown on small screens) */}
        <div className="block md:hidden w-full h-[260px] relative overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={s.mobile}
                alt={s.alt}
                fill
                sizes="(max-width: 767px) 640px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="relative -mt-[60px] md:-mt-[220px] pointer-events-none">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center pointer-events-auto">
            <button
              onClick={prev}
              aria-label="Previous"
              className="bg-white/90 hover:bg-white rounded-full p-2 shadow"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="bg-white/90 hover:bg-white rounded-full p-2 shadow"
            >
              ›
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
