import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import AllMealsPage from "./pages/AllMeals";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import ReservationsPage from "./pages/Reservations";
import RootLayout from "./pages/Root";

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
        { path: "orderonline", element: <AllMealsPage /> },
        { path: "login", element: <LoginPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
