"use client";

import { FaFileContract } from "react-icons/fa";
import { LegalCard, LegalSection } from "@/components/legal/LegalLayout";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsContent() {
  const { t } = useLanguage();

  const sections = [
    { title: t.contractSubject, body: t.contractSubject1, basis: t.contractSubject2, wide: true },
    { title: t.rentalPeriodandPrices, body: t.rentalPeriodandPrices1, basis: t.rentalPeriodandPrices2 },
    { title: t.bookingandPayment, body: t.bookingandPayment1, basis: t.bookingandPayment2 },
    { title: t.pickupandReturn, body: t.pickupandReturn1, basis: t.pickupandReturn2 },
    { title: t.insuranceandLiability, body: t.insuranceandLiability1, basis: t.insuranceandLiability2 },
    { title: t.privacy, body: t.privacy1, basis: t.privacy2 },
    { title: t.changesToTCs, body: t.changesToTCs1, basis: t.changesToTCs2 },
    { title: t.governingLaw, body: t.governingLaw1, basis: t.governingLaw2, wide: true },
  ];

  return (
    <LegalSection
      icon={<FaFileContract className="text-green-600" />}
      title={t.termsandconditions}
      effectiveLabel={t.effectiveDate}
      effectiveDate="Feb 3, 2025"
    >
      {sections.map((section) => (
        <LegalCard key={section.title} title={section.title} legalBasis={section.basis} wide={section.wide}>
          <p className="text-gray-600">{section.body}</p>
        </LegalCard>
      ))}
    </LegalSection>
  );
}
