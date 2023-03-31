function SubmissionError(props) {
  return (
    <section className="booking">
      <p>{props.message}</p>
      <p className="refresh" onClick={props.onClick}>
        Please try again.
      </p>
    </section>
  );
}

export default SubmissionError;
