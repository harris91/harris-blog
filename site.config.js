const CONFIG = {
  // profile setting (required)
  profile: {
    name: "HARRIS91",
    image: "/emoji/profile", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    ext: ".png",
    maxNum: 5,
    role: "full-stack developer",
    bio: "I develop everything using node.",
    email: "harris91@kakao.com",
    linkedin: "harris91",
    github: "harris91",
    instagram: "",
  },
  projects: [
    {
      name: `harris-log`,
      href: "https://github.com/harris91/harris-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "HARRIS91",
    description: "welcome to harris-log!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://harris91.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: '4b212e6603474684a6a4f5016d1e9213',
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  googleAdsense: {
    enable: true,
    config: {
      client: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "harris91/harris-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.NODE_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
