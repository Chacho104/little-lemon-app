import classes from "./AboutBrief.module.css";
import OwnersImg1 from "../../assets/owners1.jpg";
import OwnersImg2 from "../../assets/owners2.jpg";
import { Link } from "react-router-dom";

function AboutBrief() {
  return (
    <section className={classes.about}>
      <div className={classes.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          temporibus porro autem dicta atque doloremque accusamus consequuntur,
          quaerat facere architecto distinctio tempora rerum soluta corrupti
          quibusdam explicabo repellat quos sunt?
        </p>
        <Link to='/about'>Learn More</Link>
      </div>
      <div className={classes["owners-img"]}>
        <div className={classes.firstImage}>
          <img src={OwnersImg1} alt="Mario and Adrian" />
        </div>
        <div className={classes.secondImage}>
          <img src={OwnersImg2} alt="Mario and Adrian" />
        </div>
      </div>
    </section>
  );
}

export default AboutBrief;
