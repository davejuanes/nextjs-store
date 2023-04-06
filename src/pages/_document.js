import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>React Shop</title>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-T0Y0RNNMM4'></script>
        <script dangerouslySetInnerHTML={{ 
          __html: `window.datalayer = window.datalayer || [];
          function gtag() {datalayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T0Y0RNNMM4')
          `
         }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}