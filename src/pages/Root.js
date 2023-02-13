import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function RootLayout() {
    return <Fragment>
        <Nav />
        <Outlet />
        <Footer />
    </Fragment>
}

export default RootLayout;
