import { Outlet } from "react-router-dom";
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
