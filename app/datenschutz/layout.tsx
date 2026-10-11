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
    url: "https://agents-arcon.ch/datenschutz",
  },
  alternates: {
    canonical: "https://agents-arcon.ch/datenschutz",
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
          { name: "Home", url: "https://agents-arcon.ch" },
          { name: "Datenschutz", url: "https://agents-arcon.ch/datenschutz" },
        ]}
      />
      {children}
    </>
  );
}
