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
              preventScrollReset={true}
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
              preventScrollReset={true}
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
              preventScrollReset={true}
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
              preventScrollReset={true}
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
              preventScrollReset={true}
            >
              Hot Beverages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="wines"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              preventScrollReset={true}
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
              preventScrollReset={true}
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
