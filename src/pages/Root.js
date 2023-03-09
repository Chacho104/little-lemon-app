import { json, Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import MainNav from "../components/Layout/MainNav";
import CartProvider from "../store/CartProvider";

function RootLayout() {
  return (
    <CartProvider>
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
  const response = await fetch(
    "https://little-lemon-project-default-rtdb.firebaseio.com/meals.json"
  );

  if (!response.ok) {
    return json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();

    let meals = [];

    for (const key in resData) {
      meals.push({
        id: key,
        ...resData[key],
      });
    }
    return meals;
  }
}
