import Document, { Html, Head, Main, NextScript } from "next/document"
import CONFIG from "site.config"
import { getMetaTheme } from "@hooks/useThemeEffect"
import CJK from "@libs/cjk"
import Meta from '@components/Meta'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <link
            rel="preload"
            as="font"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="profile-icon"
            sizes="192x192"
            href="/profile.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {/* theme setting */}
          <Meta
            name="theme-color"
            content="#ffffff"
            media="(prefers-color-scheme: light)"
          />

          <Meta
            name="theme-color"
            content="#121826"
            media="(prefers-color-scheme: dark)"
          />

          {/* 홈화면 등록 시 앱 프로세스화 */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}

          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}

          {/* Google Adsense */}
          {CONFIG.googleAdsense.enable === true && (
            <script async 
            src={
              "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="
              + CONFIG.googleAdsense.config.client
            }
            crossOrigin="anonymous">
            </script>
          )}
          
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
