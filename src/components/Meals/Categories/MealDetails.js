import { json, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import MealItem from "../Layout/MealItem";

function MealDetails() {
  const loadedToppings = useLoaderData();

  const params = useParams();
  const id = params.mealId;
  const loadedMeals = useRouteLoaderData("root");
  const specificMealData = loadedMeals.find((meal) => meal.id === id);

  return <MealItem toppings={loadedToppings} meal={specificMealData} />;
}

export default MealDetails;

export async function loader() {
  const response = await fetch(
    "https://little-lemon-project-default-rtdb.firebaseio.com/toppings.json"
  );

  if (!response.ok) {
    throw json({ message: "Could not load meal item toppings!" });
  } else {
    const respData = await response.json();
    let loadedToppings = [];

    for (const key in respData) {
      loadedToppings.push({
        id: key,
        ...respData[key],
      });
    }
    return loadedToppings;
  }
}
