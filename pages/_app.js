import GlobalStyle from "../styles/globalStyle";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Home.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Forecast</title>
        <meta name="description" content="Weather forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
