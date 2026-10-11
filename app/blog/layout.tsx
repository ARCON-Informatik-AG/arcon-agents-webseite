import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Blog & News – Meeting Agent",
  description:
    "Aktuelle Beiträge, Produkt-Updates und Hintergründe rund um Meeting Agent: KI-Transkription, Schweizerdeutsch, Protokolle und mehr.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Blog & News – Meeting Agent",
    description:
      "Produkt-Updates, KI-News und praktische Tipps rund um Meeting-Transkription und automatische Protokolle.",
    url: "https://www.meeting-agent.ch/blog",
  },
  alternates: {
    canonical: "https://www.meeting-agent.ch/blog",
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
          { name: "Home", url: "https://www.meeting-agent.ch" },
          { name: "Blog", url: "https://www.meeting-agent.ch/blog" },
        ]}
      />
      {children}
    </>
  );
}
