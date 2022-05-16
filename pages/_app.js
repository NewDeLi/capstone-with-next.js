import Head from "next/head";
import { GlobalStyle } from "../styles/GlobalStyle";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
      <GlobalStyle />
      <Component
        {...pageProps}
      />
    </>
  );
}

export default MyApp;
