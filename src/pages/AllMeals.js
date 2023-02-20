import { json } from "react-router-dom";

function AllMealsPage() {
  return <h1>This is the all meals order online page!</h1>
}

export default AllMealsPage;

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
