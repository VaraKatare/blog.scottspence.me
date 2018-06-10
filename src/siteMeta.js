// SITE META ==================
export const nameContent = 'Scott Spence - blog'
const descriptionContent = 'Blog of Scott Spence - web developer'
const keywordsContent =
  'blog, web developer, javascript, react, learning, information, how to'
const imageLink =
  'https://blog.scottspence.me/android-chrome-512x512.png'

export const siteMeta = [
  // Google / Search Engine Tags
  {
    name: 'description',
    content: descriptionContent
  },
  {
    name: 'keywords',
    content: keywordsContent
  },
  {
    name: 'image',
    content: imageLink
  },
  // facebook
  { name: 'og:url', content: 'https://blog.scottspence.me' },
  { name: 'og:type', content: 'website' },
  { name: 'og:title', content: nameContent },
  {
    name: 'og:description',
    content: descriptionContent
  },
  {
    name: 'og:image',
    content: imageLink
  },
  // twitter
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: nameContent
  },
  {
    name: 'twitter:description',
    content: descriptionContent
  },
  {
    name: 'twitter:image',
    content: imageLink
  }
]
// /SITE META ==================
