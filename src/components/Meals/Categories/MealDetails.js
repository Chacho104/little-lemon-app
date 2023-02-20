import { useParams, useRouteLoaderData } from "react-router-dom";
import MealItem from "../Layout/MealItem";

function MealDetails() {
  const params = useParams();
  const id = params.mealId;
  const loadedMeals = useRouteLoaderData("root");
  const specificMealData = loadedMeals.find((meal) => meal.id === id);

  return <MealItem meal={specificMealData} />;
}

export default MealDetails;
