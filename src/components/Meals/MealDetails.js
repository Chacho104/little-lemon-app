import { useParams, useRouteLoaderData } from "react-router-dom";
import MealItemDetails from "./MealItemDetails";

function MealDetails() {
  const params = useParams();
  const allMeals = useRouteLoaderData("root");

  const title = params.mealTitle;
  const specificMealData = allMeals.find((meal) => meal.title === title);

  return <MealItemDetails meal={specificMealData} />;
}

export default MealDetails;
