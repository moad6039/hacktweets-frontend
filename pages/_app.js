import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
     <Login />
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
