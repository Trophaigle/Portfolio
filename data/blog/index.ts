import frMusicImage from './articles/music-image/fr'
import enMusicImage from './articles/music-image/en'

const articles = {
  fr: [frMusicImage],
  en: [enMusicImage],
}

export const getArticleBySlug = (
  locale: 'fr' | 'en',
  slug: string
) => {
  return articles[locale]?.find(a => a.slug === slug)
}

export const getFeaturedArticle = (locale: 'fr' | 'en') =>
  articles[locale].find(a => a.featured)

export const getRecentArticles = (locale: 'fr' | 'en') =>
  articles[locale].filter(a => !a.featured)