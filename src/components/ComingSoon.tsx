"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ComingSoon() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Image src="/images/logo.png" alt="DeutPak Logo" width={600} height={240} className="w-1/3 h-auto mx-auto" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.comingSoonHead}</h2>
        <p className="text-xl text-gray-600 max-w-md mx-auto">{t.comingSoonSub}</p>
      </div>
    </div>
  );
}
