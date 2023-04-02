import { Fragment } from "react";
import { ScrollRestoration } from "react-router-dom";

function IsSubmitting(props) {
  return (
    <Fragment>
      <ScrollRestoration />
      <section className="booking">
        <p>{props.message}</p>
      </section>
    </Fragment>
  );
}

export default IsSubmitting;
