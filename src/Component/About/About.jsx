import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { SiAffinitydesigner } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import portfolio_my_photo from "../../assets/portfolio_my_photo.jpeg";

const About = () => {
  return (
    <>
      <div className="about-header" id="about-me">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="error" />
      </div>
      <div className="About">
        <div className="full-image">
          <img
            src={portfolio_my_photo}
            alt="full img"
            className="About_image"
          />
        </div>
        <div className="skills">
          <p className="About-paragraph">
            I am a driven B.Tech(IT) student with a strong command of Data
            Structures, Algorithms, and Full-Stack Development. Proficient in
            C++, React, Node.js, MySQL, and MongoDB, with a passion for building
            scalable applications and solving complex programming challenges.
            Skilled in collaborative development using Git and GitHub, eager to
            apply my technical expertise in a dynamic, real-world setting.
          </p>
          <div className="About-skills">
            <SiAffinitydesigner className="About-icon" />
            <div className="content">
              <p>
                HTML, CSS, JavaScript, Bootstrap, Tailwind, React, Node.js,
                Express.js, Git-Github, VsCode
              </p>
            </div>
          </div>
          <div className="About-skills">
            <FaLaptopCode className="About-icon" />
            <div className="content">
              <p>Well-versed in DSA, 200+@Leetcode, 100+@GFG</p>
            </div>
          </div>
          <div className="About-skills">
            <FaServer className="About-icon"></FaServer>
            <div className="content">
              <p>MySQL , MongoDB,and fluent in API calls & Fatching data.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
