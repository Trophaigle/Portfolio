import React from 'react'

export default function ArticleContent({
  title,
  excerpt,
  date,
  readingTime,
  category,
  content,
}: any) {
  return (
    <article className="max-w-3xl mx-auto space-y-12">
      <header className="space-y-4">
        {category && (
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            {category.name}
          </p>
        )}

        <h1 className="text-3xl sm:text-4xl font-semibold">
          {title}
        </h1>

        {excerpt && (
          <p className="text-neutral-600 text-lg">
            {excerpt}
          </p>
        )}

        <div className="flex gap-4 text-xs text-neutral-500">
          <time>{date}</time>
          <span>{readingTime}</span>
        </div>
      </header>

      <section className="prose prose-neutral max-w-none">
        {content}
      </section>
    </article>
  )
}