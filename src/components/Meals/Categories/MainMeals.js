import { useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function MainMeals() {
  const loadedMeals = useRouteLoaderData("root");
  const mains = loadedMeals.filter((meal) => meal.category === "Mains");

  return <MealsList meals={mains} />;
}

export default MainMeals;
