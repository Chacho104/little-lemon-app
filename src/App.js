import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import CustomizeOrderPage from "./pages/CustomizeOrder";
import DessertsPage from "./pages/Desserts";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import LunchMealsPage from "./pages/LunchMeals";
import MainMealsPage from "./pages/MainsMeals";
import MenuPage from "./pages/Menu";
import OrderOnlinePage from "./pages/OrderOnline";
import OrderOnlineRootLayout from "./pages/OrderOnlineRoot";
import ReservationsPage from "./pages/Reservations";
import RootLayout from "./pages/Root";
import SpecialMealsPage from "./pages/SpecialsMeals";

// Now it's time to add routing...react-router
// 1. Install package 2. Define routes/paths/url to support and which components to load for each route (use createBrowserRouter)
// 3. Activate router and load the route definitions (use RouteProvider)

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
          children: [
            { index: true, element: <OrderOnlinePage /> },
            {
              path: "lunch",
              element: <LunchMealsPage />,
              children: [
                {
                  path: ":mealId",
                  element: <CustomizeOrderPage />,
                },
              ],
            },
            {
              path: "mains",
              element: <MainMealsPage />,
              children: [
                {
                  path: ":mealId",
                  element: <CustomizeOrderPage />,
                },
              ],
            },
            {
              path: "desserts",
              element: <DessertsPage />,
              children: [
                {
                  path: ":mealId",
                  element: <CustomizeOrderPage />,
                },
              ],
            },
            {
              path: "specials",
              element: <SpecialMealsPage />,
              children: [
                {
                  path: ":mealId",
                  element: <CustomizeOrderPage />,
                },
              ],
            },
          ],
        },
        { path: "orderonline/:mealId", element: <CustomizeOrderPage /> },
        { path: "login", element: <LoginPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
