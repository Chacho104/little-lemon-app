import classes from "./Basket.module.css";
import Button from "../UI/Button";
import SecondaryBtn from "../UI/SecondaryBtn";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import BasketItem from "./BasketItem";
import Input from "../UI/Input";

function Basket() {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  function clearCartItemsHandler() {
    cartCtx.clearCart();
  }

  const basketItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <BasketItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.basket}>
      <div>
        {hasItems && <SecondaryBtn link={"/menu"} action={"Add More"} />}
      </div>
      {hasItems && (
        <div>
          <h3>Cutlery</h3>
          <Input
            label="Help reduce plastic waste. Only ask for cutlery if you need it."
            input={{ type: "checkbox" }}
          />
        </div>
      )}
      {hasItems && <h1>Order Summary</h1>}
      <div className={classes["basket-items"]}>{basketItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <div className={classes.close}>
          {hasItems && <Button onClick={clearCartItemsHandler}>Cancel</Button>}
        </div>
        <div className={classes.proceed}>
          {hasItems && <Button link="/checkout">Order Now</Button>}
        </div>
      </div>
    </section>
  );
}

export default Basket;
