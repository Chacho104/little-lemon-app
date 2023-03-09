import { useRouteLoaderData } from "react-router-dom";
import MealsList from "./MealsList";

function BreakfastMeals() {
  const meals = useRouteLoaderData("root");
  const breakfastMeals = meals.filter((meal) => meal.category === "breakfast");

  return (
    <section>
      <MealsList meals={breakfastMeals} />
    </section>
  );
}

export default BreakfastMeals;
