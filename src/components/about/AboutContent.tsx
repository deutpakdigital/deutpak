"use client";

import Image from "next/image";
import { Award, Briefcase, CircleCheck, Eye, Layers, TrendingUp, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  const competencies = [
    { icon: TrendingUp, title: t.aboutComp1Title, description: t.aboutComp1Desc, iconBg: "bg-green-100 text-green-700", borderColor: "border-green-200" },
    { icon: Truck, title: t.aboutComp2Title, description: t.aboutComp2Desc, iconBg: "bg-yellow-100 text-yellow-700", borderColor: "border-yellow-200" },
    { icon: Layers, title: t.aboutComp3Title, description: t.aboutComp3Desc, iconBg: "bg-red-100 text-red-700", borderColor: "border-red-200" },
  ];

  return (
    <div className="bg-gray-50 pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            <Briefcase className="w-4 h-4 text-green-600" />
            <span>{t.aboutIntroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">{t.aboutPageTitle}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">{t.aboutPageSubtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-10 flex flex-col justify-between text-center hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{t.aboutVisionMissionTitle}</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">{t.aboutVisionMissionText}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center text-sm font-medium text-green-700">
              <CircleCheck className="w-5 h-5 mr-2 text-green-600" />
              <span>Built by former fleet owners, for rental operators</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-10 flex flex-col justify-between text-center hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center mx-auto mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{t.aboutFounderStoryTitle}</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">{t.aboutFounderStoryText}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center text-sm font-medium text-yellow-800">
              <CircleCheck className="w-5 h-5 mr-2 text-yellow-600" />
              <span>9+ Years Entrepreneurial Heritage (B2B &amp; B2C)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] sm:h-[480px] lg:h-[540px]">
          <Image
            src="/images/about.jpg"
            alt="DeutPak Operations"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-[center_25%] opacity-90 brightness-100"
          />
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center text-center">
            <div className="p-6 sm:p-10 max-w-lg text-white">
              <h3 className="text-xl sm:text-3xl font-extrabold mb-2 sm:mb-3 drop-shadow-md leading-tight">
                {t.aboutBannerTitle1} <br />
                <span className="block mt-1">{t.aboutBannerTitle2}</span>
              </h3>
              <p className="text-white text-xs sm:text-base font-medium leading-relaxed drop-shadow-md max-w-md mx-auto">
                {t.aboutBannerSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{t.aboutCoreCompetenciesTitle}</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map(({ icon: Icon, ...item }) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-8 border ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 ${item.iconBg}`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
