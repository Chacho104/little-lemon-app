import { useLoaderData } from "react-router-dom";
import classes from "./Testimonials.module.css";
import TestimonialsList from "./TestimonialsList";

function Testimonials() {
  const testimonials = useLoaderData();

  return (
    <section className={classes.testimonials}>
      <div className={classes.title}>
        <h1>Testimonials</h1>
      </div>
      <div className={classes.content}>
        <TestimonialsList testimonials={testimonials} />
      </div>
    </section>
  );
}

export default Testimonials;
