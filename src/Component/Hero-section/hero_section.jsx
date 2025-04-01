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
          <span>I'm Anubhav Agrawal,</span> a fullstack developer.
        </h1>
        <p>
          I am a B.Tech(IT) student with expertise in DSA, C++, and Full-Stack
          Development, passionate about designing scalable applications and
          solving complex programming challenges with innovative solutions.
        </p>
        <div className="hero-buttons">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <div className="hero-action">Contact me</div>
          </AnchorLink>
          <div className="resume">My Resume</div>
        </div>
      </div>
    </center>
  );
};

export default Hero_section;
