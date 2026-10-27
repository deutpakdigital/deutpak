import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = { title: "Login | DeutPak Auto Mieten" };

export default function LoginPage() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
