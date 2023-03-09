import { useRouteLoaderData } from "react-router-dom";
import MealsList from "./MealsList";

function MainMeals() {
  const meals = useRouteLoaderData("root");
  const mainMeals = meals.filter((meal) => meal.category === "mains");

  return (
    <section>
      <MealsList meals={mainMeals} />
    </section>
  );
}

export default MainMeals;
