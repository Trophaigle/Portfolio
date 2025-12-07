import HeroBlog from '@/app/components/blog/heroBlog'
import Link from 'next/link'
import React from 'react'

const featuredPost = {
  title: "Créer sans chercher à être vu",
  excerpt:
    "Un texte sur la liberté de créer loin des chiffres, des likes et du regard extérieur.",
  slug: "creer-sans-etre-vu",
  date: "2025-02-20",
  readingTime: "4 min",
}

const posts = [
  {
    title: "Le silence avant la musique",
    slug: "le-silence-avant-la-musique",
    date: "2025-02-12",
  },
  {
    title: "Pourquoi écrire à la main change tout",
    slug: "ecrire-a-la-main",
    date: "2025-02-01",
  },
  {
    title: "Dessiner quand on doute",
    slug: "dessiner-quand-on-doute",
    date: "2025-01-18",
  },
]

const categories = [
  { name: "Création", slug: "creation" },
  { name: "Réflexions", slug: "reflexions" },
  { name: "Processus", slug: "processus" },
]

const blog = () => {
  return (
    <>
    <HeroBlog />
    {/* WRAPPER BLANC + TEXTE SOMBRE */}
      <div className="bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
        <div className="container mx-auto px-6 py-24 space-y-24">

          {/* ARTICLE MIS EN AVANT */}
          <section>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  Article mis en avant
                </p>

                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900 group-hover:underline">
                  {featuredPost.title}
                </h1>

                <p className="text-neutral-700 max-w-2xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex gap-4 text-xs text-neutral-500">
                  <time>{featuredPost.date}</time>
                  <span>{featuredPost.readingTime}</span>
                </div>
              </article>
            </Link>
          </section>

          {/* CATEGORIES */}
          <section className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categorie/${cat.slug}`}
                className="rounded-full border px-4 py-1.5 text-sm
                           text-neutral-700 hover:text-neutral-900
                           border-neutral-300 hover:border-neutral-400
                           transition"
              >
                {cat.name}
              </Link>
            ))}
          </section>

          {/* LISTE DES ARTICLES */}
          <section className="space-y-10">
            <h2 className="text-xl font-medium text-neutral-900">
              Articles récents
            </h2>

            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="space-y-1">
                    <time className="text-xs text-neutral-500">
                      {post.date}
                    </time>

                    <h3 className="text-lg font-medium text-neutral-900 group-hover:underline">
                      {post.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default blog