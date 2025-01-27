import * as React from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "zenscroll/zenscroll-min";
import Nav from "@components/Nav";
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import "css/globals.scss";
import "css/nprogress.css";
import "css/fonts.scss";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    function handleRouteStart() {
      NProgress.start();
    }
    function handleRouteDone() {
      NProgress.done();
    }

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <Nav />
      <Menu />
      <div id="container" className="container">
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
