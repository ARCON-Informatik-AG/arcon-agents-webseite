import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { getPostBySlug } from "@/app/blog/blog";

const slug = "schweizerdeutsch-transkribieren";
const post = getPostBySlug(slug)!;
const url = `https://www.meeting-agent.ch/blog/${slug}`;

export const metadata: Metadata = {
  title: "Schweizerdeutsch transkribieren: Dialekt automatisch in Text",
  description:
    "Schweizerdeutsch automatisch transkribieren und in verständliches Hochdeutsch umwandeln – mit Sprechererkennung und Datenverarbeitung in der Schweiz.",
  keywords: [
    "Schweizerdeutsch transkribieren",
    "Schweizerdeutsch in Text umwandeln",
    "Dialekt transkribieren",
    "Schweizerdeutsch Spracherkennung",
    "Schweizerdeutsch in Hochdeutsch übersetzen",
    "Schweizerdeutsch automatisch transkribieren",
    "Zürichdeutsch transkribieren",
    "Berndeutsch transkribieren",
  ],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    locale: "de_CH",
    siteName: "Meeting Agent",
    title: "Schweizerdeutsch transkribieren: Dialekt automatisch in Text",
    description:
      "Schweizerdeutsch automatisch transkribieren und in verständliches Hochdeutsch umwandeln – mit Sprechererkennung und Datenverarbeitung in der Schweiz.",
    url,
    publishedTime: post.date,
    authors: [post.author.name],
    images: [
      {
        url: post.heroImage,
        width: 1200,
        height: 630,
        alt: post.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schweizerdeutsch transkribieren: Dialekt automatisch in Text",
    description:
      "Schweizerdeutsch automatisch transkribieren und in verständliches Hochdeutsch umwandeln – mit Sprechererkennung und Datenverarbeitung in der Schweiz.",
    images: [post.heroImage],
  },
};

function ArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: [`https://www.meeting-agent.ch${post.heroImage}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@id": "https://www.meeting-agent.ch/#organization",
    },
    articleSection: post.category,
    inLanguage: "de-CH",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.meeting-agent.ch" },
          { name: "Blog", url: "https://www.meeting-agent.ch/blog" },
          { name: post.title, url },
        ]}
      />
      {children}
    </>
  );
}
