import BasketIcon from "../Cart/BasketIcon";
import classes from "./NavBasketButton.module.css"

function NavBasketButton(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon} >
        <BasketIcon />
        <p className={classes.badge}>8</p>
      </span>
    </button>
  );
}

export default NavBasketButton;
