import { Link } from "react-router-dom";
import classes from "./SecondaryBtn.module.css";

function SecondaryBtn(props) {
  return (
    <div className={classes.delivery}>
      <p>Delivery in <strong>30 minutes</strong></p>
      <Link to={props.link}>Add More Meals</Link>
    </div>
  );
}

export default SecondaryBtn;
