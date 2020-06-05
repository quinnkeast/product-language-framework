import 'normalize.css/normalize.css';
import '../styles/typography.css';
import "@reach/menu-button/styles.css";
import { MyThemeProvider } from '../components/ThemeContext';

export default function PistachioApp({ Component, pageProps }) {
  return(
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}