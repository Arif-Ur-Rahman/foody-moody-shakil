import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";

import "./Footer.css";
import ReservationCard from "./reservationCard/ReservationCard";

const Footer = () => (
  <>
    <div className="app__footer section__padding" id="login">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Weena zuid 130, ext 405, 3012 NC Rotterdam, Netherlands.</p>
          <p className="p__opensans">+31644215009</p>
          <p className="p__opensans">foodymoody@dreamdiver.nl</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.foodymoody} alt="Meaningful description" />
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <ReservationCard />
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2024 Dream Diver. All Rights reserved.</p>
      </div>
    </div>
  </>
);

export default Footer;
