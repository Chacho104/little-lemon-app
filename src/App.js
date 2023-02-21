import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import ReservationsPage from "./pages/Reservations";
import RootLayout from "./pages/Root";
import OrderOnlineRootLayout from "./pages/OrderOnlineRoot";
import AllMeals, {
  loader as allMealsLoader,
} from "./components/Meals/Categories/AllMeals";
import BreakfastMeals from "./components/Meals/Categories/BreakfastMeals";
import LunchMeals from "./components/Meals/Categories/LunchMeals";
import MainMeals from "./components/Meals/Categories/MainMeals";
import Desserts from "./components/Meals/Categories/Desserts";
import SpecialMeals from "./components/Meals/Categories/SpecialMeals";
import MealDetails, {
  loader as toppingsLoader,
} from "./components/Meals/Categories/MealDetails";

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
                {
                  path: ":mealId",
                  element: <MealDetails />,
                  loader: toppingsLoader,
                },
              ],
            },
            {
              path: "breakfast",
              children: [
                { index: true, element: <BreakfastMeals /> },
                {
                  path: ":mealId",
                  element: <MealDetails />,
                  loader: toppingsLoader,
                },
              ],
            },
            {
              path: "lunch",
              children: [
                { index: true, element: <LunchMeals /> },
                {
                  path: ":mealId",
                  element: <MealDetails />,
                  loader: toppingsLoader,
                },
              ],
            },
            {
              path: "mains",
              children: [
                { index: true, element: <MainMeals /> },
                {
                  path: ":mealId",
                  element: <MealDetails />,
                  loader: toppingsLoader,
                },
              ],
            },
            {
              path: "desserts",
              children: [
                { index: true, element: <Desserts /> },
                {
                  path: ":mealId",
                  element: <MealDetails />,
                  loader: toppingsLoader,
                },
              ],
            },
            {
              path: "specials",
              children: [
                { index: true, element: <SpecialMeals /> },
                {
                  path: ":mealId",
                  element: <MealDetails />,
                  loader: toppingsLoader,
                },
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
