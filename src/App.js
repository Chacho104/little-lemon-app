import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage, { loader as testimonialsLoader } from "./pages/Home";
import LoginPage from "./pages/Login";
import ReservationsPage from "./pages/Reservations";
import RootLayout, { loader as allMealsLoader } from "./pages/Root";
import BreakfastMeals from "./components/Meals/BreakfastMeals";
import LunchMeals from "./components/Meals/LunchMeals";
import MainMeals from "./components/Meals/MainMeals";
import Desserts from "./components/Meals/Desserts";
import MealDetails from "./components/Meals/MealDetails";
import BasketPage from "./pages/Checkout";
import MenuRootLayout from "./pages/MenuRoot";
import Gallery from "./pages/Gallery";
import Beverages from "./components/Meals/Beverages";
import Wines from "./components/Meals/Wines";
import Juices from "./components/Meals/Juices";

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
        {
          path: "menu",
          element: <MenuRootLayout />,
          children: [
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
              path: "beverages",
              children: [
                { index: true, element: <Beverages /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "wines",
              children: [
                { index: true, element: <Wines /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
            {
              path: "juices",
              children: [
                { index: true, element: <Juices /> },
                {
                  path: ":mealTitle",
                  element: <MealDetails />,
                },
              ],
            },
          ],
        },
        { path: "reservations", element: <ReservationsPage /> },
        { path: "gallery", element: <Gallery /> },
        { path: "login", element: <LoginPage /> },
        { path: "basket", element: <BasketPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
