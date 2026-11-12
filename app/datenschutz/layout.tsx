import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Arcon Agents by Arcon Informatik AG, Schweizer Hosting, DSG-konform.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Datenschutzerklärung | Arcon Agents",
    description: "Datenschutzerklärung von Arcon Agents. Schweizer Hosting, DSG-konform.",
    url: "https://arcon-agents.ch/datenschutz",
  },
  alternates: {
    canonical: "https://arcon-agents.ch/datenschutz",
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://arcon-agents.ch" },
          { name: "Datenschutz", url: "https://arcon-agents.ch/datenschutz" },
        ]}
      />
      {children}
    </>
  );
}
