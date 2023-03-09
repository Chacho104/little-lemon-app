import { Fragment } from "react";
import HeroSection from "../components/Layout/HeroSection";
import Specials from "../components/Meals/Specials";

function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <div>
        <Specials />
      </div>
    </Fragment>
  );
}

export default HomePage;
