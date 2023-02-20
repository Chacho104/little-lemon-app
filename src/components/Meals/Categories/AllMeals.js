import { json, useRouteLoaderData } from "react-router-dom";
import MealsList from "../Layout/MealsList";

function AllMeals() {
  const loadedMeals = useRouteLoaderData("root");
  return <MealsList meals={loadedMeals} />;
}

export default AllMeals;


export async function loader() {
  const response = await fetch(
    "https://little-lemon-project-default-rtdb.firebaseio.com/meals.json"
  );

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();

    let loadedMeals = [];

    for (const key in resData) {
      loadedMeals.push({
        id: key,
        ...resData[key],
      });
    }
    return loadedMeals;
  }
}