import SecondaryBtn from "../../UI/SecondaryBtn";
import classes from "./MealItem.module.css";

function MealItem({ meal }) {
  return (
    <section>
      <div className={classes["meal-item"]}>
        <div>
          <img src={"/" + meal.image} alt={`Delicious ${meal.title}`} />
        </div>
        <div className={classes.details}>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <SecondaryBtn link={".."}  />
        </div>
      </div>
    </section>
  );
}

export default MealItem;
