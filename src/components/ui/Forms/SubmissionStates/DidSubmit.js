import { Fragment } from "react";
import Button from "../../Button";
import { ScrollRestoration } from "react-router-dom";

function DidSubmit(props) {
  return (
    <Fragment>
      <ScrollRestoration />
      <section className="booking">
        <h2>Congratulations!</h2>
        <p>{props.message}</p>
        <p>{props.regards}</p>
        <div className="action">
          <Button onClick={props.onClick}>Close</Button>
        </div>
      </section>
    </Fragment>
  );
}

export default DidSubmit;
