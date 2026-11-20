"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/translations";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/DeutPak", icon: "/images/social/facebook.png" },
  { name: "YouTube", href: "https://www.youtube.com/@DeutPak", icon: "/images/social/youtube.png" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/deutpak", icon: "/images/social/linkedin.png" },
  { name: "Snapchat", href: "https://t.snapchat.com/s3HI0dbS", icon: "/images/social/snapchat.png" },
  { name: "Instagram", href: "https://www.instagram.com/deutpak/", icon: "/images/social/instagram.png" },
  { name: "TikTok", href: "https://www.tiktok.com/@deutpak", icon: "/images/social/tiktok.png" },
];

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

const heading = "text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-6";
const link = "text-[15px] font-medium text-gray-800 hover:text-brand-700 transition-colors";

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  const quickLinks = [
    { label: t.menuHome, href: "/#home" },
    { label: t.menuAbout, href: "/about" },
    { label: t.menuWhy, href: "/#aboutUs" },
    { label: t.menuProcess, href: "/#howTo" },
  ];
  const legalLinks = [
    { label: t.menuTerms, href: "/Terms" },
    { label: t.menuPrivacy, href: "/Privacy" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gold-50 text-gray-900 border-t border-gold-200">
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-gold-200/80 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-brand-200/70 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Link columns */}
        <div className="pt-20 pb-14 grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 text-center">
          <div className="lg:col-span-2">
            <h3 className={heading}>{t.menuQuickLinks}</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className={heading}>{t.footerLegal}</h3>
            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-4">
            <h3 className={heading}>{t.menuContact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-700" />
                <span className="text-[15px] text-gray-800">
                  <span className="block font-medium">{t.location1}</span>
                  <span className="text-gray-600">Gottlieb-Dunkel-Str. 43, 12099 Berlin</span>
                </span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-brand-700" />
                <a href="tel:+493061291653" className={link}>
                  +49 (0) 30 6129 1653
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-brand-700" />
                <a href="mailto:info@deutpak.com" className={link}>
                  info@deutpak.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-4">
            <h3 className={heading}>{t.footerDigitalHeading}</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-5">{t.footerDigitalText}</p>
            <a
              href="https://deutpakdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan-700 hover:text-cyan-800 transition-colors"
            >
              <span>{t.footerDigitalBtn}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-900/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="group w-10 h-10 rounded-full bg-white ring-1 ring-gray-200 shadow-sm hover:bg-brand-700 hover:ring-brand-700 hover:-translate-y-0.5 flex items-center justify-center p-2.5 transition-all"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="w-full h-full object-contain brightness-0 opacity-80 group-hover:invert group-hover:opacity-100 transition"
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 lg:items-end text-sm">
            <div className="flex items-center gap-1" role="group" aria-label="Language">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={language === code}
                  className={`px-3 py-1 rounded-full font-medium transition-colors ${
                    language === code ? "bg-brand-700 text-white" : "text-gray-600 hover:text-brand-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-gray-500">{t.footerRegistration}</p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} DeutPak Mobility &amp; Digital Solutions GmbH. {t.footerRights}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
