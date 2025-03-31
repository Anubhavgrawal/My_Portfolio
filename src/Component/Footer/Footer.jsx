import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="Footer" id="footer">
        <div className="footer-left">
          <div className="my-name-logo">
            <h1>ANubhaV</h1>
            <img src={theme_pattern} alt="" />
          </div>
          <p className="footer-intro">
            I am a skilled full-stack developer passionate about building
            dynamic, responsive applications with seamless UI/UX and robust MERN
            backend.
          </p>
        </div>
        <div className="footer-mid">
          <div className="available-on">Available On</div>
          <div className="logos">
            <a href="https://www.linkedin.com/in/me/" className="anchor-teg">
              <FaLinkedin className="logo"></FaLinkedin>
            </a>
            <a href="https://github.com/Anubhavgrawal" className="anchor-teg">
              <FaSquareGithub className="logo"></FaSquareGithub>
            </a>
            <a
              href="https://leetcode.com/u/anubhav_agrawal7/"
              className="anchor-teg"
            >
              <SiLeetcode className="logo"></SiLeetcode>
            </a>
            <a
              href="https://www.instagram.com/_anubhavagrawal_/profilecard/?igsh=MWdudjY0dzBjbGthMQ=="
              className="anchor-teg"
            >
              <FaInstagramSquare className="logo" />
            </a>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="lower-footer">
        <div className="lower-left">
          <p>© 2025 Anubhav Agrawal. All rights reserved.</p>
        </div>
        <div className="lower-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
