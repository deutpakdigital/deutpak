"use client";

import { Building, Calendar, Clock, User, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatWeOffer() {
  const { t } = useLanguage();

  const offers = [
    { icon: Users, title: t.abtofferheader, description: t.abtWhatWeOfferDetails },
    { icon: Calendar, title: t.abtofferheader1, description: t.abtWhatWeOfferDetails1 },
    { icon: Clock, title: t.abtofferheader2, description: t.abtWhatWeOfferDetails2 },
    { icon: User, title: t.abtofferheader3, description: t.abtWhatWeOfferDetails3 },
    { icon: Building, title: t.abtofferheader4, description: t.abtWhatWeOfferDetails4 },
  ];

  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto pt-8">
        <div className="pb-20">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-neutral-900 mb-16">{t.abtWhatWeOffer}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
            {offers.map(({ icon: Icon, ...offer }, i) => (
              <div
                key={offer.title}
                className={`flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm ${
                  i === offers.length - 1 ? "sm:col-span-2 max-w-md mx-auto w-full" : ""
                }`}
              >
                <div className="bg-green-100 rounded-lg p-3 mb-3">
                  <Icon className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{offer.title}</h3>
                  <p className="text-neutral-600 text-sm">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
