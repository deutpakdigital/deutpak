"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Slide = {
  id: number;
  title: string;
  imageUrl: string;
  badge: { title: string; subtitle: string; iconBg: string };
};

const colorBars = ["bg-green-500", "bg-red-500", "bg-yellow-500"];
const TRANSITION_MS = 500;

export default function ImageSlider() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides: Slide[] = [
    { id: 1, title: t.whyChooseDeutPakFeatures, imageUrl: "/images/slider/slide-1.jpg", badge: { title: t.badgetop, subtitle: t.badgebottom, iconBg: "bg-red-500" } },
    { id: 2, title: t.whyChooseDeutPakFeatures1, imageUrl: "/images/slider/slide-2.jpg", badge: { title: t.badgetop1, subtitle: t.badgebottom1, iconBg: "bg-green-600" } },
    { id: 3, title: t.whyChooseDeutPakFeatures2, imageUrl: "/images/slider/slide-3.jpg", badge: { title: t.badgetop2, subtitle: t.badgebottom2, iconBg: "bg-yellow-400" } },
    { id: 4, title: t.whyChooseDeutPakFeatures3, imageUrl: "/images/slider/slide-4.jpg", badge: { title: t.badgetop3, subtitle: t.badgebottom3, iconBg: "bg-red-500" } },
    { id: 5, title: t.whyChooseDeutPakFeatures4, imageUrl: "/images/slider/slide-5.jpg", badge: { title: t.badgetop4, subtitle: t.badgebottom4, iconBg: "bg-green-600" } },
  ];
  const count = slides.length;

  const next = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c === count - 1 ? 0 : c + 1));
      setTransitioning(false);
    }, TRANSITION_MS);
  }, [transitioning, count]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const goTo = (index: number) => {
    if (index === current || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, TRANSITION_MS);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            current === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute top-5 left-6 w-fit">
            <div className="py-3 px-6 rounded shadow-md bg-white/80">
              <h2 className="text-xl font-bold text-gray-900 tracking-wide">{slide.title}</h2>
              <div className="h-1 w-full flex mt-1">
                {colorBars.map((bar) => (
                  <div key={bar} className={`h-full flex-1 ${bar}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
            <div className="rounded-lg p-4 shadow-lg flex items-center gap-4 max-w-xs bg-white/80">
              <div className={`${slide.badge.iconBg} rounded-full p-4`}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{slide.badge.title}</div>
                <div className="text-gray-600">{slide.badge.subtitle}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
