import { useParams, useRouteLoaderData } from "react-router-dom";
import MealItem from "../Layout/MealItem";

function MealDetails() {

  const params = useParams();
  const loadedMeals = useRouteLoaderData("root");

  const title = params.mealTitle;
  const specificMealData = loadedMeals.find((meal) => meal.title === title);

  return <MealItem meal={specificMealData} />;
}

export default MealDetails;
