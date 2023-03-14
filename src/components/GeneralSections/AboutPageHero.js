import classes from "./AboutPageHero.module.css";

function AboutPageHero() {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <p className={classes["hero-text"]}>
        Welcome to Little Lemon for traditional recipes served with a modern
        twist...
      </p>
    </div>
  );
}

export default AboutPageHero;
