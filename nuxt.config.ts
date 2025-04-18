export default defineNuxtConfig({
  app: {
    head: {
      title: "SafeToken - Token Risk Scanner",
      meta: [
        // Meta Description
        {
          name: "description",
          content: "SafeToken is a token contract checker and security checker used to analyze tokens and identify fraudulent ones."
        },
        // Meta Keywords
        {
          name: "keywords",
          content: "Token scan, Token check, Blockchain security, Token checker, Contract checker"
        },
        // Open Graph for social media sharing
        { property: 'og:title', content: 'SafeToken - Token Risk Scanner' },
        { property: 'og:description', content: 'SafeToken is a token contract checker and security checker used to analyze tokens and identify fraudulent ones.' },
        { property: 'og:image', content: '/scan.webp' },  // Path to your site image/logo
        { property: 'og:url', content: 'https://safetokenn.vercel.app' },
        { property: 'og:type', content: 'website' },
        // Twitter card metadata for Twitter sharing
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'SafeToken - Token Risk Scanner' },
        { name: 'twitter:description', content: 'SafeToken is a token contract checker and security checker used to analyze tokens and identify fraudulent ones.' },
        { name: 'twitter:image', content: '/scan.webp' },  // Path to your site image/logo
      ],
      link: [
        // Favicon (Site Logo)
        { rel: 'icon', type: 'image/x-icon', href: '/scan.webp' },  // Path to favicon in public folder
        { rel: 'apple-touch-icon', href: '/scan.webp' },  // Path to Apple touch icon (optional)
      ]
    }
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    parseErrorData: false,

    public: {
      ddApiKey: process.env.DD_API_KEY
    },
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  features: {
    inlineStyles: true
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
