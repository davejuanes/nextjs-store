import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T0Y0RNNMM4"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.datalayer = window.datalayer || [];
          function gtag() {datalayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T0Y0RNNMM4');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
