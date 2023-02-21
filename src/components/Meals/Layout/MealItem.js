import SecondaryBtn from "../../UI/SecondaryBtn";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({ meal, toppings }) {
  return (
    <section>
      <div className={classes["meal-item"]}>
        <div>
          <img src={"/" + meal.image} alt={`Delicious ${meal.title}`} />
        </div>
        <div className={classes.details}>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <SecondaryBtn link={".."} />
        </div>
        <div className={classes.customize}>
          <MealItemForm additions={toppings} meal={meal} />
        </div>
      </div>
    </section>
  );
}

export default MealItem;
