"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCarousel({ interval = 4000 }) {
  const slideVariants = {
    initial: {
      opacity: 0,
      x: 24,
      scale: 1.02,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: -24,
      scale: 1.02,
    },
  };

  const slides = [
    {
      id: 1,
      desktop: "/img/hero/hey-honey-crop-top-mocha-muse-desk.webp",
      mobile: "/img/hero/hey-honey-crop-top-mocha-muse-mobile.webp",
      alt: "Hero slide 1",
    },
    {
      id: 2,
      desktop: "/img/hero/turqtang-in-full-bloom-crop-top1.webp",
      mobile: "/img/hero/turqtang-in-full-bloom-crop-top2.webp",
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

  const isFirstSlide = index === 0;

  return (
    <section className="w-full relative overflow-hidden">
      {/* Desktop */}
      <div className="hidden md:block w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full"
          >
            <Image
              src={slides[index].desktop}
              alt={slides[index].alt}
              width={1920}
              height={900}
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full"
          >
            <Image
              src={slides[index].mobile}
              alt={slides[index].alt}
              width={1080}
              height={1350}
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
        <button
          onClick={prev}
          aria-label="Previous"
          className="bg-white/80 backdrop-blur rounded-full p-2 shadow pointer-events-auto"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="bg-white/80 backdrop-blur rounded-full p-2 shadow pointer-events-auto"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
