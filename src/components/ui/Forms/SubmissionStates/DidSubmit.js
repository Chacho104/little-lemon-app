import Button from "../../Button";

function DidSubmit(props) {
  return (
    <section>
      <div className="booking">
        <h2>Congratulations!</h2>
        <p>{props.message}</p>
        <p>{props.regards}</p>
        <div className="action">
          <Button onClick={props.onClick}>Close</Button>
        </div>
      </div>
    </section>
  );
}

export default DidSubmit;
