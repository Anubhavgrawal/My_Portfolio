import React from "react";
import "./hero.css";
import portfolio_pasport_photo from "../../assets/portfolio_pasport_photo.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero_section = () => {
  return (
    <center>
      <div className="hero" id="home">
        <img
          src={portfolio_pasport_photo}
          alt="img_error"
          className="About-image"
        />
        <h1>
          <span>I'm Anubhav Agrawal,</span> a Full-Stack developer.
        </h1>
        <p>
          Passionate Full-Stack Software Developer turning ideas into scalable, secure, and impactful web applications through clean code, modern technologies, and problem-solving.
        </p>
        <div className="hero-buttons">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <div className="hero-action">Contact me</div>
          </AnchorLink>
          <div className="resume">
            <a  href={`${import.meta.env.BASE_URL}Anubhav_Agrawal_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
            >My Resume</a>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Hero_section;
