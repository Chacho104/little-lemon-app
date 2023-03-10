import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage, { loader as testimonialsLoader } from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import ReservationsPage from "./pages/Reservations";
import RootLayout, { loader as allMealsLoader } from "./pages/Root";
import OrderOnlineRootLayout from "./pages/OrderOnlineRoot";
import BreakfastMeals from "./components/Meals/BreakfastMeals";
import LunchMeals from "./components/Meals/LunchMeals";
import MainMeals from "./components/Meals/MainMeals";
import Desserts from "./components/Meals/Desserts";
import MealDetails from "./components/Meals/MealDetails";
import BasketPage from "./pages/Checkout";
import Drinks from "./components/Meals/Drinks";
import AllMeals from "./components/Meals/AllMeals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: allMealsLoader,
      id: "root",
      children: [
        { index: true, element: <HomePage />, loader: testimonialsLoader },
        { path: "about", element: <AboutPage /> },
        { path: "menu", element: <MenuPage /> },
        { path: "reservations", element: <ReservationsPage /> },
        {
          path: "orderonline",
          element: <OrderOnlineRootLayout />,
          children: [
            {
              path: "all-meals",
              children: [
                { index: true, element: <AllMeals /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "breakfast",
              children: [
                { index: true, element: <BreakfastMeals /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "lunch",
              children: [
                { index: true, element: <LunchMeals /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "mains",
              children: [
                { index: true, element: <MainMeals /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "desserts",
              children: [
                { index: true, element: <Desserts /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "drinks",
              children: [
                { index: true, element: <Drinks /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
          ],
        },
        { path: "login", element: <LoginPage /> },
        { path: "basket", element: <BasketPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
