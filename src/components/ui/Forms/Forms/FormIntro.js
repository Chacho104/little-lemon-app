import classes from "./FormIntro.module.css";
function FormIntro(props) {
  return (
    <div className={classes.intro}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default FormIntro;
