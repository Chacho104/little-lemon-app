import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HeroSection from "../components/Layout/HeroSection";
import MealsNavigation from "../components/Layout/MealsNavigation";

function OrderOnlineRootLayout() {
  return (
    <Fragment>
      <HeroSection />
      <MealsNavigation />
      <Outlet />
    </Fragment>
  );
}

export default OrderOnlineRootLayout;
