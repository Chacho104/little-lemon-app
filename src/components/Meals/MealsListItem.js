import { Link } from "react-router-dom";
import classes from "./MealsListItem.module.css";

function MealsListItem(props) {
  return (
    <li>
      <Link to={props.title} className={classes.item}>
        <div className={classes["item-content"]}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <h5>${props.price.toFixed(2)}</h5>
        </div>
        <div className={classes["item-image"]}>
          <img src={"/" + props.image} alt={`Delicious ${props.title}`} />
        </div>
      </Link>
    </li>
  );
}

export default MealsListItem;