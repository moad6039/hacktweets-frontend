import "../styles/globals.css";
import Head from "next/head";
import Login from "../components/Login";

function App({ Component, pageProps }) {
  return (
    <>
     <Login />
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
