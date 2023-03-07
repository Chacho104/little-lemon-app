import { useRouteLoaderData } from "react-router-dom";
import MealsList from "./MealsList";

function Desserts() {
  const meals = useRouteLoaderData("root");
  const desserts = meals.filter((meal) => meal.category === "Desserts");

  return (
    <section>
      <MealsList meals={desserts} />
    </section>
  );
}

export default Desserts;
