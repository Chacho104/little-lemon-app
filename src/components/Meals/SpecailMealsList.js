import SpecialMealItem from "./SpecialMealItem";
import classes from './SpecialMealsList.module.css'

function SpecialMealsList(props) {
  const { meals } = props;

  return (
    <ul className={classes.specials}>
      {meals.map((meal) => (
        <SpecialMealItem
          id={meal.id}
          key={meal.id}
          title={meal.title}
          description={meal.description}
          category={meal.category}
          price={meal.price}
          image={meal.image}
        />
      ))}
    </ul>
  );
}

export default SpecialMealsList;
