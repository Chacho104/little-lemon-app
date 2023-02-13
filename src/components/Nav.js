import { NavLink, Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Logo from "./assets/Logo.svg";

function Nav() {
  return (
    <nav className={classes.nav}>
      <span>
        <Link>
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
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservations"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orderonline"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
