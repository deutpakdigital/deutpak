"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Award, Car, CircleCheckBig, Handshake, Headset, Settings2, TrendingUp, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

/**
 * Images for the four advantages, in order. To swap them, replace these paths.
 * The frame is 16:9, so 16:9 images (e.g. 1600×900) show uncropped.
 * Each advantage can use a different image per language (useful when the artwork has text in it).
 */
const ADVANTAGE_IMAGES = [
  { en: "/images/Adv 1.jpg", de: "/images/Adv 1.jpg" },
  { en: "/images/Adv 2.jpg", de: "/images/Adv 2.jpg" },
  { en: "/images/Adv 3.jpg", de: "/images/Adv 3.jpg" },
  { en: "/images/Adv 4.jpg", de: "/images/Adv 4.jpg" },
];

const AUTOPLAY_MS = 7000;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function PartnershipModel() {
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.4 });
  const steps = [
    { icon: Car, label: t.whyChooseModel1 },
    { icon: Settings2, label: t.whyChooseModel2 },
    { icon: TrendingUp, label: t.whyChooseModel3 },
  ];

  return (
    <div
      ref={ref}
      className="mt-12 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 via-white to-amber-50 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12"
    >
      <span className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-green-700">{t.whyChooseModelBadge}</span>
      <ol className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
        {steps.map(({ icon: Icon, label }, i) => (
          <Fragment key={label}>
            {i > 0 && (
              <li aria-hidden className="hidden sm:block flex-1 mx-4 h-px bg-gray-200 overflow-hidden">
                <span
                  style={{ transitionDelay: `${i * 300}ms` }}
                  className={`block h-full bg-gradient-to-r from-green-500 to-amber-400 origin-left transition-transform duration-700 ease-out motion-reduce:transition-none ${
                    inView ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            )}
            <li
              style={{ transitionDelay: `${i * 300}ms` }}
              className={`flex items-center gap-3 shrink-0 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <span
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ring-1 ${
                  i === steps.length - 1 ? "bg-green-600 text-white ring-green-600" : "bg-white text-green-700 ring-green-100"
                }`}
              >
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-lg font-bold text-gray-900">{label}</span>
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

export default function WhyChooseUs() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [showcaseRef, showcaseInView] = useInView<HTMLDivElement>({ once: false, threshold: 0.3, rootMargin: "0px" });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const points = [
    { icon: Award, title: t.whyChoosePoint1Title, description: t.whyChoosePoint1Desc },
    { icon: Handshake, title: t.whyChoosePoint2Title, description: t.whyChoosePoint2Desc },
    { icon: Wrench, title: t.whyChoosePoint3Title, description: t.whyChoosePoint3Desc },
    { icon: Headset, title: t.whyChoosePoint4Title, description: t.whyChoosePoint4Desc },
  ];

  const next = useCallback(() => setActive((a) => (a + 1) % points.length), [points.length]);
  const autoplay = !reduceMotion;
  const paused = hovered || focused || !showcaseInView;

  return (
    <section id="aboutUs" className="relative overflow-hidden bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100 scroll-mt-16">
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-end">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 ring-1 ring-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <CircleCheckBig className="w-3.5 h-3.5 text-green-600" />
              <span>{t.aboutBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              {t.whyChooseDeutPakHeader}
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{t.whyChooseDeutPakSubHeader}</p>
            <p className="text-gray-500 text-base leading-relaxed">{t.whyChooseDeutPakSubHeader2}</p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <PartnershipModel />
        </Reveal>

        {/* Advantages showcase */}
        <div
          ref={showcaseRef}
          className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={(e) => setFocused(e.target.matches(":focus-visible"))}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
          }}
        >
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <ul className="space-y-3">
              {points.map(({ icon: Icon, title, description }, i) => {
                const isActive = i === active;
                const panelId = `advantage-panel-${i}`;
                return (
                  <li
                    key={i}
                    className={`relative rounded-2xl transition-all duration-500 ${
                      isActive ? "bg-white shadow-xl shadow-gray-200/70 ring-1 ring-gray-200" : "hover:bg-gray-50"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-expanded={isActive}
                        aria-controls={panelId}
                        className="w-full flex items-center gap-4 p-5 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                      >
                        <span
                          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive ? "bg-green-600 text-white scale-105 shadow-lg shadow-green-600/30" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="flex-1">
                          <span className={`block text-xs font-bold tracking-widest mb-0.5 transition-colors ${isActive ? "text-amber-500" : "text-gray-400"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className={`block text-base sm:text-lg font-bold leading-snug transition-colors ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                            {title}
                          </span>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 sm:pl-[5.25rem] text-sm sm:text-[15px] text-gray-600 leading-relaxed">{description}</p>
                        <div className="mx-5 mb-4 h-1 rounded-full bg-gray-100 overflow-hidden">
                          {isActive &&
                            (autoplay ? (
                              <span
                                className="block h-full rounded-full bg-gradient-to-r from-green-500 to-amber-400 origin-left animate-progress"
                                style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                                onAnimationEnd={next}
                              />
                            ) : (
                              <span className="block h-full rounded-full bg-gradient-to-r from-green-500 to-amber-400" />
                            ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 sm:-inset-5 rounded-[2rem] bg-gradient-to-tr from-green-200/70 via-transparent to-amber-200/70 blur-2xl"
              />
              <div
                aria-hidden
                className="hidden sm:block absolute -top-6 -right-6 w-28 h-28 opacity-60 [background-image:radial-gradient(#16a34a_1.5px,transparent_1.5px)] [background-size:14px_14px]"
              />

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-100">
                {points.map(({ title }, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={i}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 transition-opacity duration-700 ease-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    >
                      <Image
                        src={ADVANTAGE_IMAGES[i][language]}
                        alt={title}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        priority={i === 0}
                        className={`object-cover ${isActive && autoplay ? "animate-ken-burns" : ""}`}
                      />
                    </div>
                  );
                })}

                <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
                  {points.map(({ title }, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={title}
                      className={`h-2 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
