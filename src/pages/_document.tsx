import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import { FB_PIXEL_ID } from '../../lib/fpixel';
// import { GTM_ID } from '../../lib/gtm';
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
          {/* FACEBOOK PIXEL - START */}
          {/* <noscript>
            <iframe
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript> */}
          {/* FACEBOOK PIXEL - END */}
          {/* Global Site Tag (gtag.js) - Google Analytics - START */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
            }}
          /> */}
          {/* Global Site Tag (gtag.js) - Google Analytics - END */}
        </Head>
        <body>
          <title>Signature Mídia - A sua assinatura no digital</title>
          {/* 👇 Here's the script */}
          {/* GOOGLE TAG MANAGER - START */}
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript> */}
          {/* GOOGLE TAG MANAGER - END */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
