import { Html, Head, Main, NextScript } from "next/document";
import { montserrat } from "../../public/styles/font";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <body className={montserrat.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
