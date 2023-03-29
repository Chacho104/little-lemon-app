import classes from "./FormPageBackground.module.css";

function FormPageBackground(props) {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <section className={classes.content}>{props.children}</section>
    </div>
  );
}

export default FormPageBackground;
