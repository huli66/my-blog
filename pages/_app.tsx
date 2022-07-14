import "../styles/globals.css";
import type { AppProps } from "next/app";
import Bar from "./go-home";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Bar></Bar>
    </>
  );
}

export default MyApp;
