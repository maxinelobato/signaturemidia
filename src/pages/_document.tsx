import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
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
          <link rel="icon" href="/ico/favicon.ico" />
          <link rel="preload" href="/img/signaturemidia.svg" as="image" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/ico/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/ico/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/ico/favicon-16x16.png"
          />
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
          {/* CRISP - START*/}
          <script
            id="inline-script"
            dangerouslySetInnerHTML={{
              __html: `(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);`,
            }}
          ></script>
          {/* CRISP - END */}
        </Head>
        <body>
          <title>Signature Mídia - A sua assinatura no digital</title>
          {/* 👇 Here's the script */}
          {/* LEADSTER - START*/}
          {/* <script
            id="inline-script"
            dangerouslySetInnerHTML={{
              __html: `(function(n,r,l,d){try{var h=r.head||r.getElementsByTagName("head")[0],s=r.createElement("script");s.defer=true;s.setAttribute("type","text/javascript");s.setAttribute("src",l);n.neuroleadId=d;h.appendChild(s);}catch(e){}})(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js", 72246);`,
            }}
          ></script> */}
          {/* LEADSTER - END */}
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
