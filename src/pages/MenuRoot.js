import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MealsNavigation from "../components/Layout/MealsNavigation";
import PageHero from "../components/Layout/PageHero";
import MenuHero from "../assets/menuhero.jpg";

function MenuRootLayout() {
  return (
    <Fragment>
      <PageHero image={MenuHero} alt={"Mario and Adrian"} />
      <MealsNavigation
        title={"Order for Delivery"}
        message={
          <p>
            Check out all the available meals and drinks and, if you love to
            enjoy your meals in the comfort of your home, pick your favorite(s)
            from the categories below, add to basket and order online, and we
            will deliver swiftly!
          </p>
        }
      />
      <Outlet />
    </Fragment>
  );
}

export default MenuRootLayout;
