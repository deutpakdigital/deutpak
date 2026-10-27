import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata: Metadata = { title: "Privacy Policy | DeutPak Auto Mieten" };

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <PrivacyContent />
    </LegalLayout>
  );
}
