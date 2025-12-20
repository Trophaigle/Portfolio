import { getArticleBySlug } from '@/data/blog'
import ArticleContent from './ArticleContent'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params

  const article = getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <div className="bg-white text-neutral-900 px-6 py-24">
      <ArticleContent {...article} />
    </div>
  )
}