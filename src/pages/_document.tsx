import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="/icon.ico" type="image/icon" sizes="32x32" />
      </Head>
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
