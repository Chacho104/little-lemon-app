import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage, { loader as testimonialsLoader } from "./pages/Home";
import LoginPage from "./pages/Login";
import BookingPage from "./pages/Booking";
import RootLayout, { loader as allMealsLoader } from "./pages/Root";
import BreakfastMeals from "./components/Meals/BreakfastMeals";
import LunchMeals from "./components/Meals/LunchMeals";
import MainMeals from "./components/Meals/MainMeals";
import Desserts from "./components/Meals/Desserts";
import MealDetails from "./components/Meals/MealDetails";
import BasketPage from "./pages/Checkout";
import MenuRootLayout from "./pages/MenuRoot";
import Beverages from "./components/Meals/Beverages";
import Wines from "./components/Meals/Wines";
import Juices from "./components/Meals/Juices";
import Signup from "./pages/Signup";
import OrderRootLayout from "./pages/OrderRoot";

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
              element: <BreakfastMeals />,
            },
            {
              path: "lunch",
              element: <LunchMeals />,
            },
            {
              path: "mains",
              element: <MainMeals />,
            },
            {
              path: "desserts",
              element: <Desserts />,
            },
            {
              path: "beverages",
              element: <Beverages />,
            },
            {
              path: "wines",
              element: <Wines />,
            },
            {
              path: "juices",
              element: <Juices />,
            },
          ],
        },
        {
          path: "menu/breakfast",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        {
          path: "menu/lunch",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        {
          path: "menu/mains",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        {
          path: "menu/desserts",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        {
          path: "menu/beverages",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        {
          path: "menu/wines",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        {
          path: "menu/juices",
          element: <OrderRootLayout />,
          children: [{ path: ":mealTitle", element: <MealDetails /> }],
        },
        { path: "reservations", element: <BookingPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <Signup /> },
        { path: "basket", element: <BasketPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
