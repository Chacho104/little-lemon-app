import { useRouteLoaderData } from "react-router-dom";
import MealsList from "./MealsList";

function LunchMeals() {
  const meals = useRouteLoaderData("root");
  const lunchMeals = meals.filter((meal) => meal.category === "lunch");

  return (
    <section>
      <MealsList meals={lunchMeals} />
    </section>
  );
}

export default LunchMeals;
