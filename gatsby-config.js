const config = require('./data/siteConfig')

const siteMetadata = {
  siteUrl: 'https://blog.scottspence.me',
  title: 'blog.scottspence.me',
  siteTitle: 'blog.scottspence.me',
  description:
    'Blog (learnings) of Scott Spence, father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him.',
  titleTemplate: '%s | blog.scottspence.me',
  twitterUsername: '@ScottDevTweets',
  facebookAppID: '',
  pages: ['about', 'contact', 'tags'],
  nameContent: 'Scott Spence - blog',
  developerName: 'Scott Spence',
  developerUrl: 'https.scottspence.me',
  keywordsContent:
    'blog, web developer, javascript, react, learning, information, how to',
  imageLink: 'https://blog.scottspence.me/icons/icon-512x512.png',
  faviconPng: './src/images/favicon.png',
  contact: [
    { name: 'GitHub', link: 'https://github.com/spences10' },
    { name: 'Medium', link: 'https://medium.com/@spences10' },
    { name: 'Dev.to', link: 'https://dev.to/spences10' },
    { name: 'Twitter', link: 'https://twitter.com/ScottDevTweets' },
    { name: 'Email', link: 'mailto:spences10apps@gmail.com' }
  ],
  backgroundColour: '#663399', // this is for favicon and manifest
  themeColour: '#755f9f', // this is for favicon and manifest
  siteLanguage: 'en-GB'
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: config.faviconPng,
        // WebApp Manifest Configuration
        appName: config.siteTitle,
        appDescription: config.descriptionContent,
        developerName: config.developerName,
        developerURL: config.developerUrl,
        dir: 'auto',
        lang: config.siteLanguage,
        background: config.backgroundColour,
        theme_color: config.themeColour,
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: '/',
        background_color: config.backgroundColour,
        theme_color: config.themeColour,
        display: 'minimal-ui',
        icon: config.faviconPng // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID, // add to netlify Build environment variables
        anonymize: false
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
