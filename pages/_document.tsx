import { Html, Main, NextScript, Head } from "next/document";

const Document = (): JSX.Element => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        crossOrigin="anonymous"
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
    </Head>
    <body className="antialiased">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
