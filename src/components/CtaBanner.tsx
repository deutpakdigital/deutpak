"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaBanner() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <div
      className="text-white py-32 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundImage: "url(/images/cta-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-red-900 bg-opacity-90" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.experienceLuxuryDrivingHeader}</h2>
          <p className="text-lg mb-8 opacity-90">{t.experienceLuxuryDrivingDetails}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/#aboutUs")}
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8B4513] transition-all duration-300"
            >
              {t.btnLearnMore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
