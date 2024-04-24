import { store } from "@/app/store";
import { EmptyLayout } from "@/components/layout/empty-layout";
import { AppPropsWithLayout } from "@/models/common";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
const red = "red";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  const theme = {
    fg: "#BF4F74",
    bg: "red"
  };

  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}
