import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [addToBasket, setAddToBasket] = useState("");
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    if (enteredAmountNumber === 1) {
      setAddToBasket(
        <p>Basket successfully updated with {enteredAmountNumber} item!</p>
      );
    } else {
      setAddToBasket(
        <p>Basket successfully updated with {enteredAmountNumber} items!</p>
      );
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <h2>Add</h2>
        <Input label="Feta" input={{ type: "checkbox" }} />
        <Input label="Parmesan" input={{ type: "checkbox" }} />
        <Input label="Dressing" input={{ type: "checkbox" }} />
      </div>
      <div>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <div className={classes.action}>
        <button className="formbtn">Add to Basket</button>
        {addToBasket}
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
}

export default MealItemForm;
