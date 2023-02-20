import { useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function Desserts() {
  const loadedMeals = useRouteLoaderData("root");
  const desserts = loadedMeals.filter((meal) => meal.category === "Desserts");

  return <MealsList meals={desserts} />;
}

export default Desserts;
