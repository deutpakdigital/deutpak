"use client";

import { ArrowRight, Building2, CircleCheck, ShieldCheck, Truck } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import { useLanguage } from "@/context/LanguageContext";

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      number: "01",
      title: t.heroB2BService1Title,
      description: t.heroB2BService1Desc,
      tag: t.heroTag1,
      iconBg: "bg-green-500/10 text-green-500",
    },
    {
      icon: Truck,
      number: "02",
      title: t.heroB2BService2Title,
      description: t.heroB2BService2Desc,
      tag: t.heroTag2,
      iconBg: "bg-yellow-500/10 text-yellow-500",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: t.heroB2BService3Title,
      description: t.heroB2BService3Desc,
      tag: t.heroTag3,
      iconBg: "bg-red-500/10 text-red-500",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen xl:h-screen pt-20 pb-6 flex flex-col justify-center bg-black text-white overflow-hidden"
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center my-auto">
        <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-green-400 text-xs font-semibold tracking-wide uppercase mb-3 shadow-sm">
            <CircleCheck className="w-3.5 h-3.5 text-green-400" />
            <span>DeutPak Mobility &amp; Digital Solutions GmbH</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-3">
            {t.heroB2BTitle}
          </h1>
          <p className="text-xs sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal mb-4 text-center">
            {t.heroB2BSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollTo("aboutUs")}
              className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-green-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{t.btnLearnMore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("howTo")}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              <span>{t.menuProcess}</span>
            </button>
          </div>
        </div>

        <div>
          <div className="text-center mb-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-green-400">
              {t.heroB2BCoreServicesTitle}
            </h2>
            <div className="w-12 h-0.5 bg-green-500 mx-auto mt-1 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {services.map(({ icon: Icon, ...service }) => (
              <div
                key={service.number}
                className="relative group bg-gray-800/85 hover:bg-gray-800 border border-gray-700/70 hover:border-gray-600 rounded-xl p-4 lg:p-5 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between text-center"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${service.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-gray-700 group-hover:text-gray-500 transition-colors">
                      {service.number}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    {service.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5 leading-snug group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                    {service.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-gray-700/50 flex items-center justify-center text-[11px] text-gray-400 font-medium group-hover:text-white transition-colors">
                  <CircleCheck className="w-3.5 h-3.5 text-green-500 mr-1.5" />
                  <span>DeutPak B2B Service</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
