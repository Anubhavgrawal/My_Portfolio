import "./Navbar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [name, setName] = useState("home");
  const sideMenu = useRef();

  const openmenu = () => {
    sideMenu.current.style.right = "-25px";
  };

  const closemenu = () => {
    sideMenu.current.style.right = "-400px";
  };

  return (
    <div className="navbar">
      <div className="my-name-logo">
        <h1>ANubhaV</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <img
        src={menu_open}
        alt=""
        className="menu_open-button"
        onClick={openmenu}
      />
      <ul ref={sideMenu} className="nav-menu">
        <li className="cross-button">
          <img
            src={menu_close}
            alt=""
            className="menu_close-button"
            onClick={closemenu}
          />
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setName("home")}>Home</p>
          </AnchorLink>

          {name === "home" && (
            <img src={theme_pattern} alt="" className="theme" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about-me">
            <p onClick={() => setName("about-me")}>About Me</p>
          </AnchorLink>

          {name === "about-me" && (
            <img src={theme_pattern} alt="" className="theme" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setName("projects")}>Projects</p>
          </AnchorLink>

          {name === "projects" && (
            <img src={theme_pattern} alt="" className="theme" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setName("contact")}>Contact</p>
          </AnchorLink>

          {name === "contact" && (
            <img src={theme_pattern} alt="" className="theme" />
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
