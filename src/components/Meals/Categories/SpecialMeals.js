import { useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function SpecialMeals() {
  const loadedMeals = useRouteLoaderData("root");
  const specials = loadedMeals.filter((meal) => meal.isFeatured);

  return <MealsList meals={specials} />;
}

export default SpecialMeals;
