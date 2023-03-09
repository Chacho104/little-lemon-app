import { useRouteLoaderData } from "react-router-dom";
import MealsList from "./MealsList";

function AllMeals() {
  const meals = useRouteLoaderData("root");

  return (
    <section>
      <MealsList meals={meals} />
    </section>
  );
}

export default AllMeals;
