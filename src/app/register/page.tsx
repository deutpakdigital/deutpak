import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = { title: "Register | DeutPak Auto Mieten" };

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <RegisterForm />
        <CtaBanner />
        <Footer />
      </main>
    </div>
  );
}
