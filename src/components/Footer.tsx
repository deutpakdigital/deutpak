"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
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
const link = "text-[15px] font-medium text-gray-200 hover:text-amber-300 transition-colors";

/** Full-width "DEUTPAK" wordmark: gold "DEUT", green "PAK", like the logo. */
function Wordmark() {
  // It sits at the very bottom of the page, so it can only ever reach the bottom edge of the viewport.
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1, rootMargin: "0px" });
  return (
    <div ref={ref} aria-hidden className="relative overflow-hidden select-none">
      <svg
        viewBox="0 0 1000 150"
        className={`block w-full h-auto font-sans font-black transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-1/3 opacity-0"
        }`}
      >
        <defs>
          <linearGradient id="wordmark-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="55%" stopColor="#f2b84b" />
            <stop offset="100%" stopColor="#b7791f" />
          </linearGradient>
          <linearGradient id="wordmark-green" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="55%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>
        <text x="0" y="160" fontSize="212" textLength="1000" lengthAdjust="spacingAndGlyphs">
          <tspan fill="url(#wordmark-gold)">DEUT</tspan>
          <tspan fill="url(#wordmark-green)">PAK</tspan>
        </text>
      </svg>
    </div>
  );
}

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
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-amber-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Link columns */}
        <div className="pt-20 pb-14 grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
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
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-green-400" />
                <span className="text-[15px] text-gray-200">
                  <span className="block font-medium">{t.location1}</span>
                  <span className="text-gray-400">Gottlieb-Dunkel-Str. 43, 12099 Berlin</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-green-400" />
                <a href="tel:+493061291653" className={link}>
                  +49 (0) 30 6129 1653
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-green-400" />
                <a href="mailto:info@deutpak.com" className={link}>
                  info@deutpak.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-4">
            <h3 className={heading}>{t.footerDigitalHeading}</h3>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-5">{t.footerDigitalText}</p>
            <a
              href="https://deutpakdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{t.footerDigitalBtn}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-green-600 hover:ring-green-500 hover:-translate-y-0.5 flex items-center justify-center p-2.5 transition-all"
              >
                <Image src={social.icon} alt="" width={20} height={20} className="w-full h-full object-contain brightness-0 invert" />
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
                    language === code ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
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

        <Wordmark />
      </div>
    </footer>
  );
}
