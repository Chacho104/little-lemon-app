import { NavLink } from "react-router-dom";

import classes from "./MealsNavigation.module.css";

function MealsNavigation() {
  return (
    <section className={classes.filtermeals}>
      <h1>Order for Delivery</h1>
      <nav className={classes.mealsnav}>
        <ul className={classes["mealsnav-items"]}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Meals
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
              to="specials"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Specials
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MealsNavigation;
