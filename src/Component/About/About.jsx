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
            Passionate Full-Stack Software Developer with experience delivering 5+ end-to-end web applications using the
            MERN stack. Built secure authentication systems, interactive admin dashboards, payment gateway 
            integrations while developing responsive user interfaces and scalable backend services. Strong foundation in C++, Data Structures & Algorithms, with 300+ coding problems solved and a commitment to writing clean, maintainable code.          </p>
          <div className="About-skills">
            <SiAffinitydesigner className="About-icon" />
            <div className="content">
              <p>
                React.js, Node.js, Express.js, JavaScript (ES6+), C++, REST APIs, JWT Authentication, Git, GitHub, Tailwind CSS, Bootstrap, HTML5, CSS3, Postman, Figma, VS Code
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
