import { useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function LunchMeals() {
  const loadedMeals = useRouteLoaderData("root");

  const lunchMeals = loadedMeals.filter((meal) => meal.category === "Lunch");

  return <MealsList meals={lunchMeals} />;
}

export default LunchMeals;
