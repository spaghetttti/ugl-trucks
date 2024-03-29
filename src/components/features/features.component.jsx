import React from "react";

import "./features.styles.scss";
import GoogleMap from "../google-map/google-map.component";
import ContactForm from "../contact-form/contact-form.component";
//import Logo5 from "../../assets/traveler.jpg";
import Logo5 from '../../assets/Trucksunsplash.jpg';

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src={Logo5} width="100%" alt="" />
        <div className="feature__info">
          <p className="feature__top">A lot to choose from</p>
          <p className="feature__bottom">
            New high-quality trucks added each week. Filter out trucks according
            to your need and wants, in our inventory page and find the perfect truck
            for you for a reasonable price.
          </p>
          <p className="feature__cta">
            <a href="/">Learn More</a>
          </p>
        </div>
      </div>
      <div className="feature">
        <div className="feature__info">
          <p className="feature__top">About our company</p>
          <p className="feature__bottom">
            Commercial truck solutions for any budget and business. We are
            dedicated truck dealership based in Montgomery IL. Our highly
            professional team and fleet managers give you best sugesstions to
            your choice.
          </p>
          <p className="feature__cta">
            <a href="/">Learn More</a>
          </p>
        </div>
      </div>
      <div className="contact"> 
        <div className="contact__opt">
        <p className="feature__top">Contact us</p>
          <GoogleMap />
        </div>
        <div className="contact__opt">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Features;
