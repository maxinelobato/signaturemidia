import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            property="title"
            content="Signature Mídia - A sua assinatura no digital"
          />
          <meta
            name="description"
            content="Landing Pages | Site Institucional | Tráfego Google Ads | Tráfego Facebook | Tráfego Instagram Ads e Social Mídia"
          />
          <meta property="url" content="https://signaturemidia.vercel.app/" />
          <meta property="type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/img/signaturemidia.svg" as="image" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <title>Signature Mídia - A sua assinatura no digital</title>
          {/* 👇 Here's the script */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
