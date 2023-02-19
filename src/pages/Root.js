import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import MainNav from "../components/Layout/MainNav";

function RootLayout() {
  return (
    <Fragment>
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default RootLayout;
