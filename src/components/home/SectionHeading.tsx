import { CircleCheckBig } from "lucide-react";

/** Shared text styles so every home section reads the same. Colours come from the logo palette (brand / gold). */
export const sectionTitle =
  "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] hyphens-auto [overflow-wrap:anywhere]";
export const sectionLead = "text-gray-600 text-base sm:text-lg leading-relaxed";
export const sectionBody = "text-gray-500 text-base leading-relaxed";
export const cardTitle = "text-base sm:text-lg font-bold leading-snug";
export const cardText = "text-sm sm:text-[15px] text-gray-600 leading-relaxed";
/** Small uppercase label above a card title. */
export const cardEyebrow = "text-xs font-semibold uppercase tracking-wider text-gray-400";

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 ring-1 ring-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
      <CircleCheckBig className="w-3.5 h-3.5 text-gold-600" />
      <span>{children}</span>
    </div>
  );
}
