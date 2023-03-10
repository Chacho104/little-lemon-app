import { Fragment } from "react";
import { json } from "react-router-dom";
import AboutBrief from "../components/GeneralSections/AboutBrief";
import Testimonials from "../components/GeneralSections/Testimonials";
import HeroSection from "../components/Layout/HeroSection";
import Specials from "../components/Meals/Specials";

function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <div>
        <Specials />
        <Testimonials />
        <AboutBrief />
      </div>
    </Fragment>
  );
}

export default HomePage;

export async function loader() {
  const response = await fetch(
    "https://little-lemon-project-default-rtdb.firebaseio.com/testimonials.json"
  );
  if (!response.ok) {
    return json({ message: "Could not fetch testimonials" }, { status: 500 });
  } else {
    const resData = await response.json();

    let testimonials = [];

    for (const key in resData) {
      testimonials.push({
        id: key,
        ...resData[key],
      });
    }

    return testimonials;
  }
}
