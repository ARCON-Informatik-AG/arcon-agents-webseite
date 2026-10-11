import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  description: "Allgemeine Geschäftsbedingungen von Arcon Agents by Arcon Informatik AG, nach schweizerischem Recht.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "AGB | Arcon Agents",
    description: "Allgemeine Geschäftsbedingungen von Arcon Agents by Arcon Informatik AG.",
    url: "https://agents-arcon.ch/agb",
  },
  alternates: {
    canonical: "https://agents-arcon.ch/agb",
  },
};

export default function AGBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://agents-arcon.ch" },
          { name: "AGB", url: "https://agents-arcon.ch/agb" },
        ]}
      />
      {children}
    </>
  );
}
