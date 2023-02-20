import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import ReservationsPage from "./pages/Reservations";
import RootLayout from "./pages/Root";
import OrderOnlineRootLayout from "./pages/OrderOnlineRoot";
import MealItem from "./components/Meals/Layout/MealItem";
import AllMeals, { loader as allMealsLoader} from "./components/Meals/Categories/AllMeals";
import BreakfastMeals from "./components/Meals/Categories/BreakfastMeals";
import LunchMeals from "./components/Meals/Categories/LunchMeals";
import MainMeals from "./components/Meals/Categories/MainMeals";
import Desserts from "./components/Meals/Categories/Desserts";
import SpecialMeals from "./components/Meals/Categories/SpecialMeals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "menu", element: <MenuPage /> },
        { path: "reservations", element: <ReservationsPage /> },
        {
          path: "orderonline",
          element: <OrderOnlineRootLayout />,
          loader: allMealsLoader,
          id: "root",
          children: [
            {
              path: "all-meals",
              children: [
                { index: true, element: <AllMeals /> },
                { path: ":mealId", element: <MealItem /> },
              ],
            },
            {
              path: "breakfast",
              children: [
                { index: true, element: <BreakfastMeals /> },
                { path: ":mealId", element: <MealItem /> },
              ],
            },
            {
              path: "lunch",
              children: [
                { index: true, element: <LunchMeals /> },
                { path: ":mealId", element: <MealItem /> },
              ],
            },
            {
              path: "mains",
              children: [
                { index: true, element: <MainMeals /> },
                { path: ":mealId", element: <MealItem /> },
              ],
            },
            {
              path: "desserts",
              children: [
                { index: true, element: <Desserts /> },
                { path: ":mealId", element: <MealItem /> },
              ],
            },
            {
              path: "specials",
              children: [
                { index: true, element: <SpecialMeals /> },
                { path: ":mealId", element: <MealItem /> },
              ],
            },

          ],
        },
        { path: "login", element: <LoginPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
