import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Blog & News – Arcon Agents",
  description:
    "Aktuelle Beiträge, Produkt-Updates und Hintergründe rund um Arcon Agents: die Schweizer KI-Plattform für Unternehmen.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Blog & News – Arcon Agents",
    description:
      "Produkt-Updates, KI-News und praktische Tipps rund um die Schweizer KI-Plattform Arcon Agents.",
    url: "https://arcon-agents.ch/news",
  },
  alternates: {
    canonical: "https://arcon-agents.ch/news",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://arcon-agents.ch" },
          { name: "Blog", url: "https://arcon-agents.ch/news" },
        ]}
      />
      {children}
    </>
  );
}
