import classes from "./FormButton.module.css";

function FormButton(props) {
  return (
    <button onClick={props.Onclick} className={classes.formbtn}>
      {props.children}
    </button>
  );
}

export default FormButton;
