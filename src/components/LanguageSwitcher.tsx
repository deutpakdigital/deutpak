"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/translations";

const options: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "EN", label: "English" },
  { code: "de", flag: "DE", label: "Deutsch" },
];

// "compact" is the desktop header variant, "full" the mobile menu variant.
export default function LanguageSwitcher({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const [open, setOpen] = useState(false);
  const { t, setLanguage } = useLanguage();
  const full = variant === "full";

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex ${full ? "justify-center" : "justify-end"} items-center gap-2 rounded border border-gray-300 p-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none`}
      >
        <span className={full ? "text-xl" : "text-xs"}>{t.menuFlag}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div
          className={`absolute z-10 w-36 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${full ? "" : "right-0"}`}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.code}
                onClick={() => {
                  setLanguage(option.code);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2"
              >
                {full && <span className="text-xl">{option.flag}</span>}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
