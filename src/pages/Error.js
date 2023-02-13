import { Fragment } from "react";
import Nav from "../components/Nav";

function ErrorPage() {
  return (
    <Fragment>
      <Nav />
      <section className="center-content">
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </section>
    </Fragment>
  );
}

export default ErrorPage;
