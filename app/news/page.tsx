import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/app/news/blog";

export default function BlogOverviewPage() {
  const posts = getAllPosts();
  const [featured, ...all] = posts;
  const rest = all.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-16 mb-16">

      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-12 pt-32 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Aktuelles von{" "}
            <span className="bg-gradient-to-r from-[#1bcb80] to-[#00a05c] bg-clip-text text-transparent">
              Arcon Agents
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-900 leading-relaxed">
            Produkt-Updates, KI-Hintergründe und praktische Tipps für den Einsatz
            von KI-Assistenten im Unternehmen – direkt aus dem Team.
          </p>
        </div>

        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-white" />
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="px-4 sm:px-6 lg:px-12 pb-20">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/news/${featured.slug}`}
              className="group block"
              aria-label={`Beitrag öffnen: ${featured.title}`}
            >
              <Card className="overflow-hidden border-border/60 hover:border-[#1bcb80]/60 hover:shadow-xl transition-all duration-300 p-0 gap-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] bg-gray-100 overflow-hidden">
                    <Image
                      src={featured.heroImage}
                      alt={featured.heroImageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-8 sm:p-12 gap-5">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="bg-[#1bcb80]/10 text-[#00a05c] hover:bg-[#1bcb80]/15 border-0">
                        {featured.category}
                      </Badge>
                      <span className="inline-flex items-center text-sm text-gray-900 gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {featured.dateFormatted}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-900 gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {featured.readingTime}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-100 ring-2 ring-white shadow-sm">
                        <Image
                          src={featured.author.image}
                          alt={`Foto von ${featured.author.name}`}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {featured.author.name}
                        </span>
                        <span className="text-xs text-gray-700">
                          {featured.author.role}
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-[#1bcb80] font-medium pt-2 group-hover:gap-3 gap-2 transition-all">
                      Beitrag lesen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 mt-1" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Grid of remaining posts */}
      {rest.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-12 pb-32">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">
              Weitere Beiträge
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group block"
                >
                  <Card className="h-full overflow-hidden border-border/60 hover:border-[#1bcb80]/60 hover:shadow-lg transition-all duration-300 p-0 gap-0">
                    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={post.heroImageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col gap-3">
                      <div className="flex items-center gap-3 flex-wrap text-xs">
                        <Badge className="bg-[#1bcb80]/10 text-[#00a05c] hover:bg-[#1bcb80]/15 border-0">
                          {post.category}
                        </Badge>
                        <span className="inline-flex items-center text-gray-900 gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.dateFormatted}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-900 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      </main>

      <Footer />
    </div>
  );
}
