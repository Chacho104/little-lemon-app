import { Link } from "react-router-dom";
import classes from "./MealsList.module.css";

function MealsList({ meals }) {
  return (
    <section>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <Link to={meal.id} className={classes.item}>
              <div className={classes["item-content"]}>
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <h5>${meal.price.toFixed(2)}</h5>
              </div>
              <div className={classes["item-image"]}>
                <img src={"/" + meal.image} alt={`Delicious ${meal.title}`} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MealsList;
