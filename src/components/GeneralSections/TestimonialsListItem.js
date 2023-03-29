import { FaQuoteLeft } from "react-icons/fa";
import classes from "./TestimonialsListItem.module.css";
import Rating from "./Rating";
import Card from "../UI/Card";

function TestimonialsListItem(props) {
  return (
    <Card>
      <div className={classes.testimonial}>
        <div className={classes["testimonial-svg"]}>
          <FaQuoteLeft />
        </div>
        <div className={classes["testimonial-content"]}>{props.comment}</div>
        <div className={classes["testimonial-user"]}>
          <div>
            <h4>{props.name}</h4>
            <p>{props.occupation}</p>
            <Rating rating={props.rating} />
          </div>
          <div>
            <img src={"/" + props.image} alt={`${props.name}`} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialsListItem;
