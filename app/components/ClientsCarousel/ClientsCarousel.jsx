"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CLIENTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function ClientsCarousel() {
  const [emblaApi, setEmblaApi] = React.useState(null);
  const autoplayRef = React.useRef(null);

  const startAutoplay = React.useCallback(() => {
    if (autoplayRef.current || !emblaApi) return;
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 2000);
  }, [emblaApi]);

  const stopAutoplay = React.useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      setApi={setEmblaApi}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <CarouselPrevious />

      <CarouselContent className="gap-2">
        {CLIENTS.map((id) => (
          <CarouselItem key={id} className="basis-1/2 md:basis-1/8 p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <Image
                  src={`/img/clients/${id}.webp`}
                  alt={`Client ${id}`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  );
}
