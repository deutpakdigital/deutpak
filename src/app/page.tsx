import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ScrollToHash from "@/components/home/ScrollToHash";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <Header />
      <main>
        <Hero />
        {/* Keeps the section glows (see PageGlow) behind the content and clips them at the screen edges. */}
        <div className="relative isolate overflow-hidden bg-white">
          <WhyChooseUs />
          <HowItWorks />
          <Gallery />
        </div>
        <Footer />
      </main>
    </div>
  );
}
