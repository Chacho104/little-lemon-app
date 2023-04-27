import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import MainNav from "../components/Layout/MainNav";
import CartProvider from "../store/CartProvider";
import { getAllMeals } from "../dummy-db";

function RootLayout() {
  return (
    <CartProvider>
      <ScrollRestoration />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default RootLayout;

export async function loader() {
  // Here's where you can fetch data from a database
  // Was using firebase realtime db, but this expires every month
  // Went for my own dummy db for experimental build
  const meals = getAllMeals();

  return meals;
}
