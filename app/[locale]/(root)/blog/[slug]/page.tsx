import { getArticleBySlug } from '@/data/blog'
import ArticleContent from './ArticleContent'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: 'fr' | 'en'; slug: string }>
}) {
  const { locale, slug } = await params

  const article = getArticleBySlug(locale, slug)

  if (!article) notFound()

  return (
    <div className="bg-white text-neutral-900 px-6 py-24">
      <ArticleContent {...article} />
    </div>
  )
}