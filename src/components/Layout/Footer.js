import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";

import { TfiLocationPin } from "react-icons/tfi";
import { SlPhone, SlEnvelopeOpen } from "react-icons/sl";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <nav className={classes.bottNav}>
          <section className={classes.logo}>
            <Link to="/">
              <img src={Logo} alt="Little Lemon Logo" />
            </Link>
          </section>
          <section className={classes.item}>
            <h1>Useful Links</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </section>
          <section className={classes.item}>
            <h1>Contacts</h1>
            <ul>
              <li>
                <TfiLocationPin className={classes.icon} /> 132, My FoodStreet,
                Chicago
              </li>
              <li>
                <SlPhone className={classes.icon} /> +1 (508) 767-1176
              </li>
              <li>
                <SlEnvelopeOpen className={classes.icon} />{" "}
                inquiries@littlelemon.com
              </li>
            </ul>
          </section>
          <section className={classes.item}>
            <h1>Social Media Links</h1>
            <ul>
              <li>
                <a href="littlelemon@instagram.com">
                  <BsInstagram className={classes.icon} />
                </a>
              </li>
              <li>
                <a href="littlelemon@facebook.com">
                  <BsFacebook className={classes.icon} />
                </a>
              </li>
              <li>
                <a href="littlelemon@twitter.com">
                  <BsTwitter className={classes.icon} />
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </footer>
      <div className={classes.copyright}>
        <p>&copy; Little Lemon 2023 | All Rights Reserved</p>
      </div>
    </Fragment>
  );
}

export default Footer;
