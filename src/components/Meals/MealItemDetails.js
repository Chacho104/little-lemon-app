import { useContext } from "react";
import CartContext from "../../store/cart-context";
import SecondaryBtn from "../UI/SecondaryBtn";
import classes from "./MealItemDetails.module.css";
import MealItemForm from "./MealItemForm";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <div className={classes.image}>
          <img src={"/" + meal.image} alt={`Delicious ${meal.title}`} />
          <Link className={classes.backbtn} to={".."}>
            <BsArrowLeft />
          </Link>
        </div>
        <div className={classes.details}>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <SecondaryBtn />
        </div>
        <div className={classes.customize}>
          <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </section>
  );
}

export default MealItemDetails;
