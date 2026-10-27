"use client";

import { Award, CircleCheckBig, ShieldCheck, TrendingDown, Truck } from "lucide-react";
import ImageSlider from "@/components/home/ImageSlider";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const points = [
    { number: "01", icon: Award, title: t.whyChoosePoint1Title, description: t.whyChoosePoint1Desc, iconBg: "bg-green-100 text-green-700" },
    { number: "02", icon: TrendingDown, title: t.whyChoosePoint2Title, description: t.whyChoosePoint2Desc, iconBg: "bg-blue-100 text-blue-700" },
    { number: "03", icon: Truck, title: t.whyChoosePoint3Title, description: t.whyChoosePoint3Desc, iconBg: "bg-yellow-100 text-yellow-700" },
    { number: "04", icon: ShieldCheck, title: t.whyChoosePoint4Title, description: t.whyChoosePoint4Desc, iconBg: "bg-red-100 text-red-700" },
  ];

  return (
    <section id="aboutUs" className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <ImageSlider />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-gray-900 text-white p-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-gray-700 z-20">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center font-black text-xl text-white">
                9+
              </div>
              <div>
                <p className="text-sm font-bold text-white">Years Practical Experience</p>
                <p className="text-xs text-gray-400">Former Fleet Owners (B2B &amp; B2C)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <CircleCheckBig className="w-3.5 h-3.5 text-green-600" />
                <span>{t.aboutBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                {t.whyChooseDeutPakHeader}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{t.whyChooseDeutPakSubHeader}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {points.map(({ icon: Icon, ...point }) => (
                <div
                  key={point.number}
                  className="p-5 rounded-xl bg-gray-50 hover:bg-white border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-center"
                >
                  <div>
                    <div className="flex flex-col items-center mb-4">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-2 ${point.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-gray-400">{point.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
