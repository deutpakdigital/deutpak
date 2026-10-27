import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import PortalContent from "@/components/PortalContent";

export const metadata: Metadata = { title: "B2B & B2C Portal | DeutPak Auto Mieten" };

export default function PortalPage() {
  return (
    <div className="relative min-h-screen xl:h-screen flex flex-col justify-between bg-black text-white overflow-hidden">
      <Header />
      <HeroVideo />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <PortalContent />
    </div>
  );
}
