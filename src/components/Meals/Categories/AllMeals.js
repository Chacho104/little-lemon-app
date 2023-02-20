import { useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function AllMeals() {
  const loadedMeals = useRouteLoaderData("root");

  return <MealsList meals={loadedMeals} />;
}

export default AllMeals;
