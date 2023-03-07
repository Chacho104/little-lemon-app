import MealsListItem from "./MealsListItem";

function MealsList(props) {
  const { meals } = props;
  return (
    <ul>
      {meals.map((meal) => (
        <MealsListItem
          id={meal.id}
          key={meal.id}
          title={meal.title}
          description={meal.description}
          price={meal.price}
          image={meal.image}
        />
      ))}
    </ul>
  );
}

export default MealsList;
