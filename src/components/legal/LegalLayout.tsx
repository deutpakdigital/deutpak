import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export function LegalCard({
  title,
  legalBasis,
  wide = false,
  children,
}: {
  title: string;
  legalBasis: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ${wide ? "md:col-span-2" : ""}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {children}
      <p className="text-sm text-gray-400 mt-2">{legalBasis}</p>
    </div>
  );
}

export function LegalSection({
  icon,
  title,
  effectiveLabel,
  effectiveDate,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  effectiveLabel: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-8 mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
        {icon}
        {title}
      </h2>
      <p className="text-gray-700 text-center mb-6">
        <strong>{effectiveLabel}</strong> {effectiveDate}
      </p>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </section>
  );
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Header />
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
          <div className="max-w-6xl mx-auto mt-[98px]">{children}</div>
        </div>
        <CtaBanner />
        <Footer />
      </main>
    </div>
  );
}
