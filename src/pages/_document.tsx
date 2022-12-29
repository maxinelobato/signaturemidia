import { ColorModeScript, theme } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import { FB_PIXEL_ID } from '../../lib/FacebookPixel';
// import { GTM_ID } from '../../lib/GoogleTagManager';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* FACEBOOK PIXEL - START*/}
          {/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript> */}
          {/* FACEBOOK PIXEL - END*/}
          <meta property="title" content="Dra. Mayana Silva - Advogada Criminal" />
          <meta
            name="description"
            content="Advogada Criminal Especialista em Acompanhamento em Delegacia, Atuação em Tribunais, Defesa em Processos Criminais, Execução Penal"
          />
          <meta property="url" content="https://mayanasilva.vercel.app/" />
          <meta property="type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/img/bgImage.webp" as="image" />
          <link rel="preload" href="/img/may.webp" as="image" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          {/* GOOGLE TAG MANAGER - START*/}
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript> */}
          {/* GOOGLE TAG MANAGER - END*/}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          {/* GOOGLE ANALYTICS - START */}
          {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        /> */}
          {/* GOOGLE ANALYTICS - END */}
        </body>
      </Html>
    );
  }
}
