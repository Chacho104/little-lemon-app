import { Fragment } from "react";
import { ScrollRestoration } from "react-router-dom";

function SubmissionError(props) {
  return (
    <Fragment>
      <ScrollRestoration />
      <section className="booking">
        <p>{props.message}</p>
        <p className="refresh" onClick={props.onClick}>
          Please try again.
        </p>
      </section>
    </Fragment>
  );
}

export default SubmissionError;
