import { Link } from "react-router-dom";
import classes from "./DropMenu.module.css";
function DropMenu(props) {
  return (
    <section className={classes["drop-menu"]}>
      <ul className={classes.navList}>
        <li>
          <Link to="/" onClick={props.onClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" onClick={props.onClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="menu" onClick={props.onClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="reservations" onClick={props.onClick}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="login" onClick={props.onClick}>
            Log In
          </Link>
        </li>
        <li>
          <Link to="signup" onClick={props.onClick}>
            Sign Up
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default DropMenu;
