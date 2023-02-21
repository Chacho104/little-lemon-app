import FormButton from "../../UI/FormButton";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm({ additions, meal }) {
  return (
    <form className={classes.form}>
      <h2>Add</h2>
      <div>
        <ul>
          {additions.map((addition) => (
            <Input
              key={addition.title}
              label={
                <div className={classes.label}>
                  <span>{addition.title}</span>
                  <span>${addition.price.toFixed(2)}</span>
                </div>
              }
              input={{
                id: addition.title,
                type: "radio",
              }}
            />
          ))}
        </ul>
      </div>
      <div>
        <Input
          label="No. of Servings"
          input={{
            id: "amount_" + meal.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>
      <div className={classes.action}>
        <FormButton>Add to Basket for ${meal.price.toFixed(2)}</FormButton>
      </div>
    </form>
  );
}

export default MealItemForm;
