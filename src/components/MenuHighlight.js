import Button from "./ui/Button";

import classes from "./MenuHighlights.module.css";
import Card from "./ui/Card";

function MenuHighlightSection() {
  return (
    <section className={classes.highlights}>
      <div className={classes.title}>
        <h1>This Week's Specials!</h1>
        <Button link="/menu">Online Menu</Button>
      </div>
      <div className={classes.dishes}>
        <Card>
            <ul>{featuredDishes}</ul>
        </Card>
      </div>
    </section>
  );
}

export default MenuHighlightSection;
