"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const goTo = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  const desktopLink = "cursor-pointer text-gray-700 hover:text-green-600 font-medium transition-colors";
  const mobileLink = "cursor-pointer text-left text-gray-700 hover:text-green-600 font-medium";

  return (
    <header
      className={`py-2 px-6 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className={desktopLink}>
            {t.menuHome}
          </button>
          <button onClick={() => goTo("/about")} className={desktopLink}>
            {t.menuAbout}
          </button>
          <button onClick={() => scrollToSection("aboutUs")} className={desktopLink}>
            {t.menuWhy}
          </button>
          <button onClick={() => scrollToSection("howTo")} className={desktopLink}>
            {t.menuProcess}
          </button>
          <button
            onClick={() => goTo("/portal")}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors border border-green-200"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span>{t.menuPortal}</span>
          </button>
          <a
            href="https://deutpakdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-gray-700 hover:text-green-700 font-medium hover:bg-gray-100 transition-all border border-gray-200 shadow-sm text-sm"
          >
            <span>{t.navExploreDigital}</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
          </a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className={mobileLink}>
              {t.menuHome}
            </button>
            <button onClick={() => goTo("/about")} className={mobileLink}>
              {t.menuAbout}
            </button>
            <button onClick={() => scrollToSection("aboutUs")} className={mobileLink}>
              {t.menuWhy}
            </button>
            <button onClick={() => scrollToSection("howTo")} className={mobileLink}>
              {t.menuProcess}
            </button>
            <button
              onClick={() => goTo("/portal")}
              className="cursor-pointer text-left inline-flex items-center gap-2 text-green-700 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>{t.menuPortal}</span>
            </button>
            <a
              href="https://deutpakdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer inline-flex items-center justify-between text-gray-800 hover:text-green-700 font-medium pt-2 border-t border-gray-100"
            >
              <span>{t.navExploreDigital}</span>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </a>
            <LanguageSwitcher variant="full" />
          </nav>
        </div>
      )}
    </header>
  );
}
