"use client";

import { FaCookieBite, FaShieldAlt } from "react-icons/fa";
import { LegalCard, LegalSection } from "@/components/legal/LegalLayout";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <>
      <LegalSection
        icon={<FaShieldAlt className="text-green-600 font-bold" />}
        title={t.privacypolicy}
        effectiveLabel={t.effectiveDate}
        effectiveDate="February 3, 2025"
      >
        <LegalCard title={t.responsibleParty} legalBasis={t.responsibleParty2}>
          <p className="text-gray-600">
            {t.responsibleParty1}
            <br />
            Gottlieb-Dunkel-Str. 43
            <br />
            12099 Berlin, Germany
          </p>
          <p className="mt-1 text-blue-600 underline">
            <a href="mailto:info@deutpak.com">info@deutpak.com</a>
          </p>
        </LegalCard>
        <LegalCard title={t.CollectionProcessing} legalBasis={t.CollectionProcessing2}>
          <p className="text-gray-600">{t.CollectionProcessing1}</p>
        </LegalCard>
        <LegalCard title={t.SharingwithThirdParties} legalBasis={t.SharingwithThirdParties2}>
          <p className="text-gray-600">{t.SharingwithThirdParties1}</p>
        </LegalCard>
        <LegalCard title={t.yourRights} legalBasis={t.yourRights2}>
          <p className="text-gray-600">{t.yourRights1}</p>
        </LegalCard>
        <LegalCard title={t.changestoPrivacyPolicy} legalBasis={t.changestoPrivacyPolicy2} wide>
          <p className="text-gray-600">{t.changestoPrivacyPolicy1}</p>
        </LegalCard>
      </LegalSection>

      <LegalSection
        icon={<FaCookieBite className="text-yellow-500" />}
        title={t.cookiePolicy}
        effectiveLabel={t.effectiveDate}
        effectiveDate="February 3, 2025"
      >
        <LegalCard title={t.useofCookies} legalBasis={t.useofCookies2}>
          <p className="text-gray-600">{t.useofCookies1}</p>
        </LegalCard>
        <LegalCard title={t.typesofCookies} legalBasis={t.typesofcookiescode}>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>
              <strong>{t.necessaryCookies}</strong> {t.necessaryCookies1}
            </li>
            <li>
              <strong>{t.performanceCookies}</strong> {t.performanceCookies1}
            </li>
            <li>
              <strong>{t.functionalCookies}</strong> {t.functionalCookies1}
            </li>
          </ul>
        </LegalCard>
        <LegalCard title={t.managingCookies} legalBasis={t.managingCookies2}>
          <p className="text-gray-600">{t.managingCookies1}</p>
        </LegalCard>
        <LegalCard title={t.ChangestoCookiePolicy} legalBasis={t.ChangestoCookiePolicy2}>
          <p className="text-gray-600">{t.ChangestoCookiePolicy1}</p>
        </LegalCard>
      </LegalSection>
    </>
  );
}
