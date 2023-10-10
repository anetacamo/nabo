import { AppProps } from "next/app";
import "../styles/styles.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
