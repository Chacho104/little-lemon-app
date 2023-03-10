import Star from "../UI/Star";

function Rating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} filled={i < rating} />);
  }
  return <div>{stars}</div>;
}

export default Rating;
