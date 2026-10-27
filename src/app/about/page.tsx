import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "About | DeutPak Auto Mieten" };

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutContent />
      <WhatWeOffer />
      <Footer />
    </div>
  );
}
