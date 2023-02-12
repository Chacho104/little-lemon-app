import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import OrderOnlinePage from "./pages/OrderOnline";
import ReservationsPage from "./pages/Reservations";

// Now it's time to add routing...react-router
// 1. Install package 2. Define routes/paths/url to support and which components to load for each route (use createBrowserRouter)
// 3. Activate router and load the route definitions (use RouteProvider)

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/menu", element: <MenuPage /> },
    { path: "/reservations", element: <ReservationsPage /> },
    { path: "/orderonline", element: <OrderOnlinePage /> },
    { path: "/login", element: <LoginPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
