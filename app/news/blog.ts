export type BlogAuthor = {
  name: string;
  role: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateFormatted: string;
  readingTime: string;
  heroImage: string;
  heroImageAlt: string;
  author: BlogAuthor;
};

const author: BlogAuthor = {
  name: "Philippe Fuhrer",
  role: "AI Engineer & Consultant",
  image: "/Arcon_Philippe_Fuhrer_RGB-min-scaled.jpg",
};

const posts: BlogPost[] = [
  {
    slug: "eigene-ki-assistenten-fuer-ihr-unternehmen",
    title: "Eigene KI-Assistenten für Ihr Unternehmen einrichten",
    excerpt:
      "Mit Arcon Agents erstellen Sie KI-Assistenten für wiederkehrende Aufgaben in Ihrem Team – von der Recherche bis zur Dokumentation.",
    category: "Produkt",
    date: "2026-10-06",
    dateFormatted: "6. Oktober 2026",
    readingTime: "4 Min. Lesezeit",
    heroImage: "/arcon-images/Prov. Export Key Visuals Agent-10.jpg",
    heroImageAlt: "Arcon Agents Key Visual",
    author,
  },
  {
    slug: "unternehmenswissen-mit-ki-verbinden",
    title: "Unternehmenswissen mit KI verbinden",
    excerpt:
      "Wie Ihre Dokumente und Wissensquellen zur Grundlage für Antworten Ihrer KI-Assistenten werden – und worauf Sie dabei achten sollten.",
    category: "Hintergrund",
    date: "2026-09-22",
    dateFormatted: "22. September 2026",
    readingTime: "5 Min. Lesezeit",
    heroImage: "/arcon-images/Digital-Collaboration-11.jpg",
    heroImageAlt: "Zusammenarbeit im Team mit digitalen Werkzeugen",
    author,
  },
  {
    slug: "integrationen-mit-geschaeftsanwendungen",
    title: "Integrationen mit Ihren Geschäftsanwendungen",
    excerpt:
      "Arcon Agents lässt sich mit bestehenden Geschäftsanwendungen verbinden, etwa mit Abacus, damit KI-Assistenten auf die richtigen Daten zugreifen.",
    category: "Integrationen",
    date: "2026-09-08",
    dateFormatted: "8. September 2026",
    readingTime: "3 Min. Lesezeit",
    heroImage: "/arcon-images/Prov. Export Key Visuals Agent-15.jpg",
    heroImageAlt: "Arcon Agents Integrationen",
    author,
  },
  {
    slug: "ki-hosting-in-der-schweiz",
    title: "Warum Hosting in der Schweiz bei KI wichtig ist",
    excerpt:
      "Arcon Agents wird in der Schweiz gehostet. Was das für den Schutz Ihrer Daten und Chat-Inhalte bedeutet.",
    category: "Sicherheit",
    date: "2026-08-25",
    dateFormatted: "25. August 2026",
    readingTime: "4 Min. Lesezeit",
    heroImage: "/arcon-images/Prov. Export Key Visuals Agent-17.jpg",
    heroImageAlt: "Arcon Agents Sicherheit und Datenschutz",
    author,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
