import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben zu Arcon Agents by Arcon Informatik AG, Steinhausen, Schweiz. Kontaktinformationen und Handelsregistereintrag.",
  openGraph: {
    title: "Impressum | Arcon Agents",
    description: "Impressum und rechtliche Angaben zu Arcon Agents by Arcon Informatik AG.",
    url: "https://arcon-agents.ch/impressum",
  },
  alternates: {
    canonical: "https://arcon-agents.ch/impressum",
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://arcon-agents.ch" },
          { name: "Impressum", url: "https://arcon-agents.ch/impressum" },
        ]}
      />
      {children}
    </>
  );
}
