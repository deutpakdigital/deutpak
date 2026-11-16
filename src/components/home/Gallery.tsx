"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Images, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

type Item = { src: string; caption: string; span: string };

const SWIPE_PX = 50;

function Lightbox({
  items,
  index,
  onClose,
  onSelect,
}: {
  items: Item[];
  index: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}) {
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = items.length;
  const prev = useCallback(() => onSelect((index - 1 + count) % count), [index, count, onSelect]);
  const next = useCallback(() => onSelect((index + 1) % count), [index, count, onSelect]);

  useEffect(() => {
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const item = items[index];
  const navButton =
    "absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 text-white flex items-center justify-center backdrop-blur transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-sm flex flex-col animate-fade-in"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm font-medium text-gray-300 tabular-nums">
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.galleryClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div
        className="relative flex-1 min-h-0 mx-2 sm:mx-20"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > SWIPE_PX) (dx > 0 ? prev : next)();
          touchX.current = null;
        }}
      >
        <div key={index} className="absolute inset-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
          <Image src={item.src} alt={item.caption} fill sizes="100vw" className="object-contain" priority />
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label={t.galleryPrev}
        className={`${navButton} left-2 sm:left-5`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label={t.galleryNext}
        className={`${navButton} right-2 sm:right-5`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="px-4 pt-4 pb-5 sm:pb-6" onClick={(e) => e.stopPropagation()}>
        <p className="text-center text-white font-semibold mb-4">{item.caption}</p>
        <div className="hidden sm:flex justify-center gap-2">
          {items.map((thumb, i) => (
            <button
              key={thumb.src}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={thumb.caption}
              aria-current={i === index}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                i === index ? "ring-2 ring-amber-400 opacity-100" : "opacity-50 hover:opacity-90"
              }`}
            >
              <Image src={thumb.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [gridRef, gridInView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Bento layout: on both the 2-column (mobile) and 4-column (desktop) grid these spans tile with no gaps.
  const items: Item[] = [
  // Wide (col-span-2) tiles crop top and bottom, so they hold the wide parking shots; the group photo gets a large tile.
    { src: "/images/gallery/1.jpeg", caption: t.galleryCaption1, span: "col-span-2 row-span-2" },
    { src: "/images/gallery/7.jpeg", caption: t.galleryCaption7, span: "col-span-2" },
    { src: "/images/gallery/2.jpeg", caption: t.galleryCaption2, span: "" },
    { src: "/images/gallery/4.jpeg", caption: t.galleryCaption4, span: "" },
    { src: "/images/gallery/5.jpeg", caption: t.galleryCaption5, span: "" },
    { src: "/images/gallery/6.jpeg", caption: t.galleryCaption6, span: "" },
    { src: "/images/gallery/3.jpeg", caption: t.galleryCaption3, span: "col-span-2 row-span-2" },
    { src: "/images/gallery/8.jpeg", caption: t.galleryCaption8, span: "col-span-2" },
  ];

  const close = useCallback(() => {
    setOpen((current) => {
      if (current !== null) tileRefs.current[current]?.focus();
      return null;
    });
  }, []);

  const reveal = (inView: boolean) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <section id="gallery" className="relative bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className={`max-w-2xl mx-auto text-center mb-12 lg:mb-16 ${reveal(headerInView)}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 ring-1 ring-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Images className="w-3.5 h-3.5 text-green-600" />
            <span>{t.galleryBadge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">{t.galleryHeader}</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{t.gallerySubHeader}</p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3 sm:gap-4">
          {items.map((item, i) => (
            <button
              key={item.src}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${t.galleryOpen}: ${item.caption}`}
              style={{ transitionDelay: gridInView ? `${i * 80}ms` : "0ms" }}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500 ${item.span} ${reveal(gridInView)}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes={item.span.includes("col-span-2") ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute left-3 right-3 bottom-3 sm:left-4 sm:bottom-4 flex items-end justify-between gap-2 text-left sm:translate-y-2 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-sm sm:text-base font-semibold leading-snug drop-shadow">{item.caption}</span>
                <span className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/25 items-center justify-center text-white">
                  <Expand className="w-4 h-4" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && <Lightbox items={items} index={open} onClose={close} onSelect={setOpen} />}
    </section>
  );
}
