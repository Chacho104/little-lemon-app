import { Fragment } from "react";
import About from "../components/GeneralSections/About";
import AboutPageHero from "../components/GeneralSections/AboutPageHero";

function AboutPage() {
  return (
    <Fragment>
      <AboutPageHero />
      <About />
    </Fragment>
  );
}

export default AboutPage;
