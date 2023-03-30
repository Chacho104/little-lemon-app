import { useContext } from "react";
import CartContext from "../../store/cart-context";
import SecondaryBtn from "../UI/SecondaryBtn";
import classes from "./MealItemDetails.module.css";
import MealItemForm from "./MealItemForm";

function MealItemDetails({ meal }) {
  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: meal.id,
      title: meal.title,
      amount: amount,
      price: meal.price,
    });
  }
  return (
    <section>
      <div className={classes["meal-item"]}>
        <div>
          <img src={"/" + meal.image} alt={`Delicious ${meal.title}`} />
        </div>
        <div className={classes.details}>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <SecondaryBtn link={".."} action={"Change"} />
        </div>
        <div className={classes.customize}>
          <MealItemForm
            id={meal.id}
            onAddToCart={addToCartHandler}
          />
        </div>
      </div>
    </section>
  );
}

export default MealItemDetails;
