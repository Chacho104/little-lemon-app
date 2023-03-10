import { useRouteLoaderData } from "react-router-dom";
import SpecialMealsList from "./SpecailMealsList";
import classes from "./Specials.module.css";
import Button from "../UI/Button";

function Specials() {
  const meals = useRouteLoaderData("root");
  const specialMeals = meals.filter((meal) => meal.isFeatured);

  return (
    <section>
      <div className={classes.title}>
        <h1>This Week's Specials!</h1>
        <Button link="/menu">Online Menu</Button>
      </div>
      <div className={classes.highlights}>
        <SpecialMealsList meals={specialMeals} />
      </div>
    </section>
  );
}

export default Specials;
