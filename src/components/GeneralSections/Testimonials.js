import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./Testimonials.module.css";
import TestimonialsList from "./TestimonialsList";

function Testimonials() {
  const testimonials = useLoaderData();

  return (
    <Fragment>
      <div className={classes.title}>
        <h1>They All Love Little Lemon</h1>
        <p>
          Come experience our delicious food and irrresistible hospitality and
          share your Little Lemon story.
        </p>
      </div>
      <section className={classes.testimonials}>
        <div className={classes.content}>
          <TestimonialsList testimonials={testimonials} />
        </div>
      </section>
    </Fragment>
  );
}

export default Testimonials;
