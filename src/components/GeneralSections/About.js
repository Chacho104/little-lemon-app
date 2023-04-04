import { Link } from "react-router-dom";
import classes from "./About.module.css";
import LocationImage1 from "../../assets/restaurant.jpg";
import LocationImage2 from "../../assets/chicago2.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import { BsClockHistory } from "react-icons/bs";
import MarioImage from "../../assets/mario.jpg";
import AdrianImage from "../../assets/adrian.jpg";
import Chef from "../../assets/headchef2.jpg";

// NB: Could transfer the branches to a database and map them here instead of hard coding; fine to hard code now coz we only have two
// Consider moving the branches to a new component

function About() {
  return (
    <section className={classes.about}>
      <h1>About</h1>
      <div className={classes.description}>
        <p>
          Little Lemon (co-founded by Mario Stefano and Adrian Demphris) is a
          vibrant Chicago restaturant focused on serving traditional recipes in
          a modern setting. Little Lemon celebrates the best of traditional
          Mediterranean dishes with irresistible hospitality and service. Those
          who prefer to stay at home can still enjoy our dishes through the
          swift and reliable <Link to="/menu">order online service</Link>.
          Families and groups are also catered for: just{" "}
          <Link to="/reservations">reserve a table</Link> the size of your
          family or group and come enjoy the ambience and delicious food at
          Little Lemon.
        </p>
      </div>
      <h1>Locations & Opening Hours</h1>
      <div className={classes.branch} id={classes.reverse}>
        <div>
          <img
            src={LocationImage1}
            alt="Little Lemon Restaraunt at 11th Street"
          />
        </div>
        <div className={classes.content}>
          <h2>Little Lemon 11th Street</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            esse quia ipsam dolore. Necessitatibus maiores, rerum quas
            laudantium ea ut voluptate placeat, molestias similique porro quod
            officia? Maiores, impedit fugiat!
          </p>
          <div className={classes.contact}>
            <div className={classes["contact-item"]}>
              <TfiLocationPin className={classes.icon} />
              <span>Jurassic Building, Ground Floor, 11th Street.</span>
            </div>
            <div className={classes["contact-item"]}>
              <BsClockHistory className={classes.icon} />
              <span>Open everyday 10 AM to Midnight</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.branch}>
        <div className={classes.content}>
          <h2>Little Lemon 13th Street</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos,
            dolore sapiente ducimus maiores quis iure quasi officia cupiditate
            dignissimos unde pariatur, tenetur ex, aliquam eum repellendus
            ratione incidunt molestiae.
          </p>
          <div className={classes.contact}>
            <div className={classes["contact-item"]}>
              <TfiLocationPin className={classes.icon} />
              <span>Gracer Building, 2nd Floor, 13th Street.</span>
            </div>
            <div className={classes["contact-item"]}>
              <BsClockHistory className={classes.icon} />
              <span>Open everyday 10 AM to Midnight</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={LocationImage2}
            alt="Little Lemon Restaurant at 13th Street"
          />
        </div>
      </div>
      <h1>The Team</h1>
      <div className={classes.team}>
        <div className={classes.members}>
          <div className={classes.member}>
            <img src={MarioImage} alt="Co-founder Mario Stefano" />
            <h3>Mario Stefano</h3>
            <p>Co-founder</p>
          </div>
          <div className={classes.member}>
            <img src={AdrianImage} alt="Co-founder Adrian Demphris" />
            <h3>Adrian Demphris</h3>
            <p>Co-founder</p>
          </div>
          <div className={classes.member}>
            <img src={Chef} alt="Head of Operations" />
            <h3>Julie Sharpe</h3>
            <p>Head of Operations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
