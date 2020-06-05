import 'normalize.css/normalize.css';
import '../styles/typography.css';
import "@reach/menu-button/styles.css";

export default function PistachioApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  );
}