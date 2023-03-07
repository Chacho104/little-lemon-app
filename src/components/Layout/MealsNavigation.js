import { NavLink } from "react-router-dom";

import classes from "./MealsNavigation.module.css";

function MealsNavigation() {
  return (
    <section className={classes.filtermeals}>
      <h1>Order for Delivery</h1>
      <p>
        Welcome to Little Lemon's Order Online space, a gem for those who love
        to enjoy their meals in the comfort of their homes. Order easily from
        the categories below, and we will deliver swiftly!
      </p>
      <nav className={classes.mealsnav}>
        <ul className={classes["mealsnav-items"]}>
          <li>
            <NavLink
              to="all-meals"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="breakfast"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lunch"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Lunch
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mains"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Mains
            </NavLink>
          </li>
          <li>
            <NavLink
              to="desserts"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Desserts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="drinks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Drinks
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MealsNavigation;
