import { Link } from "react-router-dom";
import classes from "./SecondaryBtn.module.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

function SecondaryBtn(props) {
  if (props.link) {
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
  } else
    return (
      <div className={classes.delivery}>
        <div className={classes['time-only']}>
          <MdOutlineDeliveryDining />
          <p>
            Delivery in <strong>30 minutes</strong>
          </p>
        </div>
      </div>
    );
}

export default SecondaryBtn;
