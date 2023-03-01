import classes from "./Basket.module.css";
import Button from "../UI/Button";
import SecondaryBtn from "../UI/SecondaryBtn";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import BasketItem from "./BasketItem";

function Basket(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const basketItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <BasketItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.basket}>
      <div>
        {hasItems && <SecondaryBtn link={"/orderonline"} />}
      </div>
      <div className={classes["basket-items"]}>{basketItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button>Close</Button>
        {hasItems && <Button>Checkout</Button>}
      </div>
    </section>
  );
}

export default Basket;
