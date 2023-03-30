import TestimonialsListItem from "./TestimonialsListItem";
import Slider from "react-slick";

import "./Slick.css";
import "./SlickTheme.css";

function TestimonialsList(props) {
  const { testimonials } = props;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
}

export default TestimonialsList;
