"use client";

import Image from "next/image";
import { CodeXml, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/DeutPak", icon: "/images/social/facebook.png" },
  { name: "YouTube", href: "https://www.youtube.com/@DeutPak", icon: "/images/social/youtube.png" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/deutpak", icon: "/images/social/linkedin.png" },
  { name: "Snapchat", href: "https://t.snapchat.com/s3HI0dbS", icon: "/images/social/snapchat.png" },
  { name: "Instagram", href: "https://www.instagram.com/deutpak/", icon: "/images/social/instagram.png" },
  { name: "TikTok", href: "https://www.tiktok.com/@deutpak", icon: "/images/social/tiktok.png" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-2">
              <Image
                src="/images/logo.png"
                alt="DeutPak Logo"
                width={200}
                height={80}
                className="h-20 w-auto object-contain mr-2"
              />
            </div>
            <p className="text-gray-600 mb-6">{t.abtsubHeader}</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-gray-900 hover:bg-green-600 flex items-center justify-center p-2 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">{t.location1}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-600">Gottlieb-Dunkel-Str. 43, 12099, Berlin</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-green-600 mr-3 flex-shrink-0" size={20} />
                <a href="tel:+493061291653" className="text-gray-600 hover:text-green-600">
                  +49 (0) 30 6129 1653
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-green-600 mr-3 flex-shrink-0" size={20} />
                <a href="mailto:info@deutpak.com" className="text-gray-600 hover:text-green-600">
                  info@deutpak.com
                </a>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700">{t.footerRegistration}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="rounded-2xl bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md border border-gray-800">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm">
                <CodeXml className="w-3.5 h-3.5" />
                <span>{t.footerDigitalHeading}</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{t.footerDigitalText}</p>
            </div>
            <a
              href="https://deutpakdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-cyan-600/30 flex-shrink-0 group"
            >
              <span>{t.footerDigitalBtn}</span>
              <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
