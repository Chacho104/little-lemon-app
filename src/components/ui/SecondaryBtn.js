import { Link } from "react-router-dom";
import classes from "./SecondaryBtn.module.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

function SecondaryBtn(props) {
  return (
    <div className={classes.delivery}>
      <div className={classes.time}>
        <MdOutlineDeliveryDining />
        <p>
          Delivery in <strong>30 minutes</strong>
        </p>
      </div>
      <Link to={props.link} preventScrollReset={true}>
        {props.action}
      </Link>
    </div>
  );
}

export default SecondaryBtn;
