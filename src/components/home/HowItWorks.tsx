"use client";

import { ChartColumn, CircleCheck, CirclePlay, FileSpreadsheet, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t.howItWorksStep1, description: t.howItWorksStep1Details, icon: Search, badgeColor: "bg-green-500 text-white", tag: t.howItWorksTag1 },
    { number: "02", title: t.howItWorksStep2, description: t.howItWorksStep2Details, icon: FileSpreadsheet, badgeColor: "bg-yellow-500 text-white", tag: t.howItWorksTag2 },
    { number: "03", title: t.howItWorksStep3, description: t.howItWorksStep3Details, icon: CirclePlay, badgeColor: "bg-blue-500 text-white", tag: t.howItWorksTag3 },
    { number: "04", title: t.howItWorksStep4, description: t.howItWorksStep4Details, icon: ChartColumn, badgeColor: "bg-red-500 text-white", tag: t.howItWorksTag4 },
  ];

  return (
    <section id="howTo" className="py-24 bg-gray-50 border-b border-gray-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100 text-green-800 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-4">
            <CircleCheck className="w-4 h-4 text-green-700" />
            <span>{t.howItWorksBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t.howItWorksHeader}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">{t.howItWorksDetails}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map(({ icon: Icon, ...step }) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between text-center group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${step.badgeColor}`}>
                    {t.step} {Number(step.number)}
                  </span>
                  <span className="text-2xl font-black text-gray-300 group-hover:text-gray-400 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-800 mx-auto mb-5 group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">{step.tag}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center text-xs font-semibold text-green-700">
                <CircleCheck className="w-4 h-4 mr-1.5" />
                <span>Phase {step.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
