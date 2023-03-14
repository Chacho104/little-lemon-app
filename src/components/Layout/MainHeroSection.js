import classes from "./MainHeroSection.module.css";

import HeroImg from "../../assets/restauranfood.jpg";
import Button from "../UI/Button";

function MainHeroSection() {
  return (
    <main className={classes['hero-section']}>
      <section className={classes.hero}>
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
      </section>
    </main>
  );
}

export default MainHeroSection;
