import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        <WhyChooseUs />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  );
}
