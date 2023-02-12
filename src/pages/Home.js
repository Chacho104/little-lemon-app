import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
function HomePage() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
