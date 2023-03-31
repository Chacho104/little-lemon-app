import classes from "./FormIntro.module.css";
function FormIntro(props) {
  return (
    <div className={classes.intro}>
      <p>{props.message}</p>
    </div>
  );
}

export default FormIntro;
