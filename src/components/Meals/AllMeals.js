import { json, useRouteLoaderData } from "react-router-dom";
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

export async function loader() {
  const response = await fetch(
    "https://little-lemon-project-default-rtdb.firebaseio.com/meals.json"
  );

  if (!response.ok) {
    return json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();

    let meals = [];

    for (const key in resData) {
      meals.push({
        id: key,
        ...resData[key],
      });
    }
    return meals;
  }
}
