import classes from "./PageHero.module.css";

function PageHero(props) {
  return (
    <section className={classes.hero}>
      <img src={props.image} alt={props.alt} />
    </section>
  );
}

export default PageHero;
