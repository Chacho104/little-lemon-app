import classes from "./Header.module.css";

import HeroImg from "./assets/restauranfood.jpg";
import Button from "./ui/Button";
function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.hero}>
        <div className={classes.content}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button link="/reservations">Reserve a Table</Button>
        </div>
        <div className={classes.image}>
          <img src={HeroImg} alt="Little Lemon Chef" />
        </div>
      </div>
    </header>
  );
}

export default Header;
