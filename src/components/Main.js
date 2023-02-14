import classes from "./Main.module.css";
import MenuHighlightSection from "./MenuHighlight";

function Main() {
  return <main className={classes.main}>
    <MenuHighlightSection />
    <h1>Testimonials</h1>
    <h1>About</h1>
  </main>;
}

export default Main;
