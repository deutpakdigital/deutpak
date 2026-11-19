"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Award, Car, Handshake, Headset, Settings2, TrendingUp, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import PageGlow from "./PageGlow";
import { SectionBadge, cardText, cardTitle, sectionBody, sectionLead, sectionTitle } from "./SectionHeading";

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
      // Label on its own line above the steps; the steps sit in one row only on large screens, where the
      // (longer) German labels have room, and stack on smaller screens.
      className="mt-12 rounded-3xl border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-gold-50 p-6 sm:p-8 flex flex-col items-center gap-6"
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700 text-center">{t.whyChooseModelBadge}</span>
      <ol className="w-full flex flex-col items-center lg:flex-row gap-4 lg:gap-0">
        {steps.map(({ icon: Icon, label }, i) => (
          <Fragment key={label}>
            {i > 0 && (
              <li aria-hidden className="hidden lg:block flex-1 min-w-8 mx-4 h-px bg-gray-200 overflow-hidden">
                <span
                  style={{ transitionDelay: `${i * 300}ms` }}
                  className={`block h-full bg-gradient-to-r from-brand-600 to-gold-400 origin-left transition-transform duration-700 ease-out motion-reduce:transition-none ${
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
                  i === steps.length - 1 ? "bg-brand-700 text-white ring-brand-700" : "bg-white text-brand-700 ring-brand-100"
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
    <section id="aboutUs" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <PageGlow side="right" color="green" align="inside-top" />
      <PageGlow side="left" color="gold" align="middle" />
      <div className="relative max-w-7xl mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center text-center">
          <Reveal>
            <SectionBadge>{t.aboutBadge}</SectionBadge>
            <h2 className={sectionTitle}>{t.whyChooseDeutPakHeader}</h2>
          </Reveal>
          <Reveal delay={120} className="space-y-4 max-w-2xl mx-auto">
            <p className={sectionLead}>{t.whyChooseDeutPakSubHeader}</p>
            <p className={sectionBody}>{t.whyChooseDeutPakSubHeader2}</p>
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
                    className={`relative rounded-2xl bg-white bg-gradient-to-tr from-brand-700/25 via-white via-50% to-gold-400/60 ring-1 ring-gray-200/80 transition-all duration-500 ${
                      isActive ? "shadow-xl shadow-gray-300/70" : "shadow-sm hover:shadow-md"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        aria-expanded={isActive}
                        aria-controls={panelId}
                        className={`w-full flex items-center gap-4 px-5 pt-5 text-left rounded-2xl transition-[padding] duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                          isActive ? "pb-3 sm:pb-1" : "pb-5"
                        }`}
                      >
                        {/* Number above the icon, nudged down a little from the row's centre. */}
                        <span className="shrink-0 flex flex-col items-center gap-1.5 translate-y-2">
                          <span className={`text-sm font-bold tracking-widest transition-colors ${isActive ? "text-gold-600" : "text-gray-400"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                              isActive ? "bg-brand-700 text-white scale-105 shadow-lg shadow-brand-700/30" : "bg-white/80 ring-1 ring-gray-100 text-gray-500"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </span>
                        </span>
                        <span className={`flex-1 text-center ${cardTitle} transition-colors ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                          {title}
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
                        <p className={`px-5 pb-5 sm:pl-[5.25rem] text-center ${cardText}`}>{description}</p>
                        <div className="mx-5 mb-4 h-1 rounded-full bg-gray-100 overflow-hidden">
                          {isActive &&
                            (autoplay ? (
                              <span
                                className="block h-full rounded-full bg-gradient-to-r from-brand-600 to-gold-400 origin-left animate-progress"
                                style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                                onAnimationEnd={next}
                              />
                            ) : (
                              <span className="block h-full rounded-full bg-gradient-to-r from-brand-600 to-gold-400" />
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
                className="absolute -inset-3 sm:-inset-5 rounded-[2rem] bg-gradient-to-tr from-brand-200/70 via-transparent to-gold-200/70 blur-2xl"
              />
              <div
                aria-hidden
                className="hidden sm:block absolute -top-6 -right-6 w-28 h-28 opacity-60 [background-image:radial-gradient(theme(colors.brand.700)_1.5px,transparent_1.5px)] [background-size:14px_14px]"
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
