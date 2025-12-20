import musicImage from './articles/music-image'

export const articles = [musicImage]

export const featuredArticle = articles.find(a => a.featured)
export const recentArticles = articles.filter(a => !a.featured)

export const getArticleBySlug = (slug: string) =>
  articles.find(a => a.slug === slug)

export const getArticlesByCategory = (category: string) =>
  articles.filter(a => a.category.slug === category)