import MenuHero from "../../assets/menuhero.jpg";
import classes from "./MenuPageHero.module.css";

function MenuPageHero() {
  return (
    <section className={classes.hero}>
      <img src={MenuHero} alt="Table full of dishes!" />
    </section>
  );
}

export default MenuPageHero;
