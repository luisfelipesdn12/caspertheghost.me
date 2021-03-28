/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "@components/Nav";
import Menu from "@components/Menu";
import Footer from "@components/Footer";
import "css/globals.scss";
import "css/nav.scss";
import "css/main.scss";
import "css/contact.scss";
import "css/skills.scss";
import "css/timeline.css";
import "css/footer.scss";
import "css/projects.scss";
import "css/modal.scss";
import "css/nprogress.css";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

function App({ Component, pageProps }: AppProps) {
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
