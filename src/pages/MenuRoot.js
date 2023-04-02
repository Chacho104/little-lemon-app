import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MealsNavigation from "../components/Layout/MealsNavigation";
import PageHero from "../components/Layout/PageHero";
import MenuHero from "../assets/menuhero.jpg";

function MenuRootLayout() {
  return (
    <Fragment>
      <PageHero image={MenuHero} alt={"Delicious Meals"} />
      <MealsNavigation
        title={"Order for Delivery"}
        message={
          <p>
            Check out all our available meals and drinks. If you love to enjoy
            your meals at home, pick your favorite(s) from the categories below,
            add to basket and order online, and we will deliver swiftly!
          </p>
        }
      />
      <Outlet />
    </Fragment>
  );
}

export default MenuRootLayout;
