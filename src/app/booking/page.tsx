import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "Booking | DeutPak Auto Mieten" };

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ComingSoon />
      <Footer />
    </div>
  );
}
