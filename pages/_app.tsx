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
  return (
    <Fragment>
      <Provider store={store}>
        {/* <ThemeProvider theme={red}> */}
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
        {/* </ThemeProvider> */}
      </Provider>
    </Fragment>
  );
}
