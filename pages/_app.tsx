import type { AppProps } from "next/app";
import "@app/public/app.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
