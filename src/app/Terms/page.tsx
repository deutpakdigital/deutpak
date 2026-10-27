import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = { title: "Terms & Conditions | DeutPak Auto Mieten" };

export default function TermsPage() {
  return (
    <LegalLayout>
      <TermsContent />
    </LegalLayout>
  );
}
