import { Fragment } from "react";
import AboutBrief from "../components/GeneralSections/AboutBrief";
import Testimonials from "../components/GeneralSections/Testimonials";
import MainHeroSection from "../components/Layout/MainHeroSection";
import Specials from "../components/Meals/Specials";
import { getAlLTestimonials } from "../dummy-db";

function HomePage() {
  return (
    <Fragment>
      <MainHeroSection />
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
  const testimonials = getAlLTestimonials();

  return testimonials;
}
