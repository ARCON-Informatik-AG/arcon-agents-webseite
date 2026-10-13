import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { getPostBySlug } from "@/app/news/blog";

const slug = "eigene-ki-assistenten-fuer-ihr-unternehmen";
const post = getPostBySlug(slug)!;
const url = `https://arcon-agent.ch/news/${slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "eigene KI-Assistenten",
    "KI-Assistent Unternehmen",
    "Arcon Agents",
    "KI-Assistenten einrichten",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    locale: "de_CH",
    siteName: "Arcon Agents",
    title: post.title,
    description: post.excerpt,
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
    title: post.title,
    description: post.excerpt,
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
    image: [`https://arcon-agent.ch${post.heroImage}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Arcon Agents",
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
          { name: "Home", url: "https://arcon-agent.ch" },
          { name: "News", url: "https://arcon-agent.ch/news" },
          { name: post.title, url },
        ]}
      />
      {children}
    </>
  );
}
