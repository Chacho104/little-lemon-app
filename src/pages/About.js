import { Fragment } from "react";
import About from "../components/GeneralSections/About";
import PageHero from "../components/Layout/PageHero";
import OwnersImage from "../assets/owners1.jpg";

function AboutPage() {
  return (
    <Fragment>
      <PageHero image={OwnersImage} alt={"Mario and Adrian"} />
      <About />
    </Fragment>
  );
}

export default AboutPage;
