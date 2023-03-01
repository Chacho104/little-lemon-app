import classes from "./FormButton.module.css";

function FormButton(props) {
  return (
    <button className={classes.formbtn}>
      {props.children}
    </button>
  );
}

export default FormButton;
