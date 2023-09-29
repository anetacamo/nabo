import { AppProps } from "next/app";
import "../styles/styles.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4HV5H0B5SG"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`  
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4HV5H0B5SG');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
