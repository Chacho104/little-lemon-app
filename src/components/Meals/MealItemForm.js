import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import FormButton from "../UI/FormButton";

function MealItemForm(props) {
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
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
        <FormButton>Add to Basket</FormButton>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </div>
    </form>
  );
}

export default MealItemForm;
