import { Fragment } from "react";
import MainNav from "../components/Layout/MainNav";

function ErrorPage() {
  return (
    <Fragment>
      <MainNav />
      <div className="center">
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </div>
    </Fragment>
  );
}

export default ErrorPage;
