import MealsList from "../Layout/MealsList";

function AllMealsPage() {
  const loadedMeals = useRouteLoaderData("root");

  return <MealsList meals={loadedMeals} />;
}

export default AllMealsPage;
