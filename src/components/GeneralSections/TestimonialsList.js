import TestimonialsListItem from "./TestimonialsListItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function TestimonialsList(props) {
  const { testimonials } = props;

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {testimonials.map((testimonial) => (
        <TestimonialsListItem
          id={testimonial.id}
          key={testimonial.id}
          name={testimonial.name}
          comment={testimonial.comment}
          rating={testimonial.rating}
          occupation={testimonial.occupation}
          image={testimonial.image}
        />
      ))}
    </Carousel>
  );
}

export default TestimonialsList;
