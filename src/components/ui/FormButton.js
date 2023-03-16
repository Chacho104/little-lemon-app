import classes from "./FormButton.module.css";

function FormButton(props) {
  return (
    <button onClick={props.onClick} className={classes.formbtn} type="submit">
      {props.children}
    </button>
  );
}

export default FormButton;
