import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body className="theme-light">
        <Main />
        <NextScript />
      </body>
    </Html>

  )
}