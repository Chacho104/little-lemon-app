import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link to={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
}

export default Button;
