import { NavLink } from "react-router-dom";

import classes from "./MealsNavigation.module.css";

function MealsNavigation(props) {
  return (
    <section className={classes.filtermeals}>
      <h1>{props.title}</h1>
      {props.message}
      <nav className={classes.mealsnav}>
        <ul className={classes["mealsnav-items"]}>
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
              to="beverages"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Beverages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="wines"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Wines & Cocktails
            </NavLink>
          </li>
          <li>
            <NavLink
              to="juices"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Juices
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MealsNavigation;
