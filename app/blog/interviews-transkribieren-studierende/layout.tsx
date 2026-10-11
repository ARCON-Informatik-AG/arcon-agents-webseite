import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { getPostBySlug } from "@/app/blog/blog";

const slug = "interviews-transkribieren-studierende";
const post = getPostBySlug(slug)!;
const url = `https://www.meeting-agent.ch/blog/${slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  keywords: [
    "Interviews transkribieren Studierende",
    "Experteninterview transkribieren",
    "Interview transkribieren Bachelorarbeit",
    "Interview transkribieren Masterarbeit",
    "qualitative Interviews auswerten",
    "Interviews automatisch transkribieren",
    "Schweizerdeutsch transkribieren",
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
