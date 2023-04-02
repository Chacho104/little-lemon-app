import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./SpecialMealItem.module.css";
import Card from "../UI/Card";

function SpecialMealItem(props) {
  return (
    <Card>
      <li>
        <div className={classes["meal-image"]}>
          <img src={"/" + props.image} alt={`Delicious ${props.title}`} />
        </div>
        <div className={classes.header}>
          <h3>{props.title}</h3>
          <p>${props.price.toFixed(2)}</p>
        </div>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <Link to={`/menu/${props.category}/${props.title}`}>Order for Delivery</Link>
          <MdOutlineDeliveryDining />
        </div>
      </li>
    </Card>
  );
}

export default SpecialMealItem;
