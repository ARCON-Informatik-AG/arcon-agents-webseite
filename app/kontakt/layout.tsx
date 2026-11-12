import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie das Team von Arcon Agents für Partnerschaften, Verkauf, Support und persönliche Beratung.",
  openGraph: {
    title: "Kontakt | Arcon Agents",
    description: "Kontaktieren Sie das Team von Arcon Agents für Partnerschaften, Verkauf, Support und persönliche Beratung.",
    url: "https://arcon-agents.ch/kontakt",
  },
  alternates: {
    canonical: "https://arcon-agents.ch/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://arcon-agents.ch" },
          { name: "Kontakt", url: "https://arcon-agents.ch/kontakt" },
        ]}
      />
      {children}
    </>
  );
}
