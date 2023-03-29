import { NavLink, Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import Logo from "../../assets/Logo.svg";
import BasketIcon from "../Cart/BasketIcon";
import { GiHamburgerMenu } from "react-icons/gi";

function MainNav() {
  return (
    <header className={classes.header}>
      <nav className={classes["nav-items"]}>
        <span className={classes.dropMenu}>
          <GiHamburgerMenu />
        </span>
        <span className={classes.logo}>
          <Link to="/">
            <img src={Logo} alt="Little Lemon Logo" />
          </Link>
        </span>
        <ul className={classes.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="menu"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reservations"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <span className={classes.basket}>
          <BasketIcon />
        </span>
      </nav>
    </header>
  );
}

export default MainNav;
