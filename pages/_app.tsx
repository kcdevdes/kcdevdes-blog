import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Google Analytics 스크립트: gtag.js를 비동기로 로드 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YVE9PKJNP5"
        strategy="afterInteractive"
      />

      {/* GA 초기화 스크립트 */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YVE9PKJNP5', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
