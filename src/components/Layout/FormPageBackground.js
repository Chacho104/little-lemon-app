import classes from "./FormPageBackground.module.css";

function FormPageBackground(props) {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <div className={classes.form}>{props.children}</div>
    </div>
  );
}

export default FormPageBackground;
