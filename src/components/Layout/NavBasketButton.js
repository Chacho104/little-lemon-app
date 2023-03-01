import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import BasketIcon from "../Cart/BasketIcon";
import classes from "./NavBasketButton.module.css";

function NavBasketButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses}>
      <span className={classes.icon}>
        <BasketIcon />
        <p className={classes.badge}>{numberOfCartItems}</p>
      </span>
    </button>
  );
}

export default NavBasketButton;
