import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "../Store/store";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
