import "./My_projects.css";
import theme_patter from "../../assets/theme_pattern.svg";
import project_card1 from "../../assets/project_card1.png";
import project_card2 from "../../assets/project_card2.png";
import project_card3 from "../../assets/project_card3.png";
import project_card4 from "../../assets/project_card4.png";
import project_card5 from "../../assets/project_card5.png";
import project_card6 from "../../assets/project_card6.png";
import zaika_junction from "../../assets/zaika_junction.png";
import admin from "../../assets/admin.png";
import Tubeshield from "../../assets/Tubeshield.png";

const My_projects = () => {
  return (
    <div className="My_projects" id="projects">
      <div className="my_projects_title">
        <h1>My Projects</h1>
        <img src={theme_patter} alt="" />
      </div>
      <div className="project-cards">
        <div className="card">
          <div className="card-image">
            <img src={zaika_junction} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">Zaika Junction</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Experience a full-stack food ordering platform with JWT authentication, 
              role-based authorization, MongoDB database, Razorpay payment integration, 
              and an intuitive admin dashboard for seamless management.
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href="https://anubhavgrawal.github.io/Zaika_Junction/" target="_blank"
                rel="noopener noreferrer">
                Project
              </a>
            </button>
            <button type="button" className="btn btn-outline-secondary card-button">
              <a href="https://github.com/Anubhavgrawal/Zaika_Junction" target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={admin} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">Admin panel</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Manage a powerful admin dashboard featuring role-based access control,
              live order tracking, menu management, user authorization, real-time order 
              listings, and an intuitive responsive interface.
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href="https://anubhavgrawal.github.io/Zaika_Junction_Admin/" target="_blank"
                rel="noopener noreferrer">
                Project
              </a>
            </button>
            <button type="button" className="btn btn-outline-secondary card-button">
              <a href="https://github.com/Anubhavgrawal/Zaika_Junction_Admin" target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={Tubeshield} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">Tubeshield</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Boost productivity with a Chrome extension that hides YouTube Shorts, 
              blocks distractions, customizes content visibility, and delivers a seamless, 
              intuitive browsing experience through smart controls.
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href={`${import.meta.env.BASE_URL}tubeshield_video.mp4`} target="_blank"
                rel="noopener noreferrer">
                Demo
              </a>
            </button>
            <button type="button" className="btn btn-outline-secondary card-button">
              <a href="https://github.com/Anubhavgrawal/TubeShield-" target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={project_card4} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">RhythmX</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Immerse yourself in a sleek, Spotify-inspired interface that
              seamlessly blends elegance, functionality, and modern aesthetics,
              delivering a visually captivating and dynamic music experience.
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href="https://anubhavgrawal.github.io/RhythmX/">
                Project
              </a>
            </button>
            <button type="button" className="btn btn-outline-secondary card-button">
              <a href="https://anubhavgrawal.github.io/RhythmX/">
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={project_card2} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">GlobeXchange</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Instantly convert your currency with real-time exchange rates
              using API integration. Experience seamless calculations with
              dynamic flag updates, ensuring accuracy for travelers, investors,
              and market watchers.
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href="https://anubhavgrawal.github.io/GlobeXchange/">
                View Project
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={project_card3} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">XO Arena</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Engage in an immersive Tic-Tac-Toe duel with intuitive mechanics,
              real-time victory detection, and seamless tie resolution.
              Strategize every move and reset effortlessly for an unending
              battle of wits!
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href="https://anubhavgrawal.github.io/XO_Arena/">
                View Project
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={project_card1} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">Threadly </h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">
              Create, share, and manage posts effortlessly with real-time
              backend API integration. Instantly add new posts, delete unwanted
              ones, and enjoy a seamless social media experience with smooth
              interactions.
            </p>
          </div>
          <div className="button">
            <button type="button" class="btn btn-outline-secondary card-button">
              <a href="">View Project</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={project_card6} alt="" />
          </div>
          <div className="card-title">
            <h1 className="image-title">New Project</h1>
          </div>
          <div className="card-content">
            <p className="image-paragraph">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_projects;
