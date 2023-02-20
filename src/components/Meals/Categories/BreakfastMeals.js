import { useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function BreakfastMeals() {
  const loadedMeals = useRouteLoaderData("root");
  const breakfast = loadedMeals.filter((meal) => meal.category === "Breakfast");

  return <MealsList meals={breakfast} />;
}

export default BreakfastMeals;
