"use client";

import { Building2, FileCheck, Rocket, SlidersHorizontal, Sparkles, TrendingUp, Truck, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Point = { icon: LucideIcon; title: string; description: string; iconColor: string };

function PointCard({ icon: Icon, title, description, iconColor }: Point) {
  return (
    <div className="p-3 rounded-xl border border-gray-700/80 bg-gray-800/80 flex items-start gap-3 transition-transform hover:-translate-y-0.5">
      <div
        className={`w-8 h-8 rounded-lg bg-gray-900/90 flex items-center justify-center flex-shrink-0 shadow-sm ${iconColor}`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5">{title}</h3>
        <p className="text-gray-300 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function PortalContent() {
  const { t } = useLanguage();

  const b2bPoints: Point[] = [
    { icon: TrendingUp, title: t.portalB2BPoint1Title, description: t.portalB2BPoint1Desc, iconColor: "text-green-400" },
    { icon: Truck, title: t.portalB2BPoint2Title, description: t.portalB2BPoint2Desc, iconColor: "text-yellow-400" },
    { icon: FileCheck, title: t.portalB2BPoint3Title, description: t.portalB2BPoint3Desc, iconColor: "text-blue-400" },
  ];
  const b2cPoints: Point[] = [
    { icon: SlidersHorizontal, title: t.portalB2CPoint1Title, description: t.portalB2CPoint1Desc, iconColor: "text-emerald-400" },
    { icon: Zap, title: t.portalB2CPoint2Title, description: t.portalB2CPoint2Desc, iconColor: "text-indigo-400" },
    {
      icon: Sparkles,
      title: t.portalStayTuned,
      description: "Connecting fleets and rental operators across Berlin and beyond.",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <main className="relative pt-20 pb-4 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
      <div className="text-center max-w-4xl mx-auto mb-5 lg:mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-green-400 text-xs font-extrabold tracking-wider uppercase mb-2 shadow-sm animate-pulse">
          <Rocket className="w-3.5 h-3.5 text-green-400" />
          <span>{t.portalBadge}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-2">
          {t.portalTitle}
        </h1>
        <p className="text-sm sm:text-base font-bold text-green-400 mb-2">{t.portalSubtitle}</p>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl mx-auto">{t.portalIntro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
        <div className="bg-gray-900/85 rounded-2xl p-4 lg:p-6 border border-gray-700/70 shadow-xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3 pb-2.5 border-b border-gray-800">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 block">{t.portalB2BBadge}</span>
                <h2 className="text-base sm:text-lg font-extrabold text-white">{t.portalB2BSectionTitle}</h2>
              </div>
            </div>
            <div className="space-y-2.5">
              {b2bPoints.map((point) => (
                <PointCard key={point.title} {...point} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-900/85 rounded-2xl p-4 lg:p-6 border border-gray-700/70 shadow-xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3 pb-2.5 border-b border-gray-800">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">{t.portalB2CBadge}</span>
                <h2 className="text-base sm:text-lg font-extrabold text-white">{t.portalB2CSectionTitle}</h2>
              </div>
            </div>
            <div className="space-y-2.5">
              {b2cPoints.map((point) => (
                <PointCard key={point.title} {...point} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
