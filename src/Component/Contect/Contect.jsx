import "./Contect.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiColor } from "react-icons/bi";

const Contect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7f9b2b11-5692-4ef7-9977-32d63cebb789");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="Contect" id="contact">
      <div className="Contect-header">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contect-content">
        <div className="contect-left">
          <h1>Let's Connect</h1>
          <p className="paragraph">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contect-left-email contect-display">
            <MdEmail className="contect-display-icon"></MdEmail>
            <p>agrawalanubhav283@gmail.com</p>
          </div>
          <div className="contect-left-phone contect-display">
            <FaPhoneVolume className="contect-display-icon"></FaPhoneVolume>
            <p>+91-8770281307</p>
          </div>
          <div className="location contect-display">
            <FaMapLocationDot className="contect-display-icon"></FaMapLocationDot>
            <p>Sector 62, NOIDA , U.P, INDIA</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contect-right">
          <label htmlFor="name " className="right-text">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="text-input"
            placeholder="John Doe"
            name="name"
          />
          <label htmlFor="email" className="right-text">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            className="text-input"
            placeholder="johndoe29@gmail.com"
            name="email"
          ></input>
          <label htmlFor="message" className="right-text">
            Enter Your Message
          </label>
          <textarea
            type="text"
            id="message"
            className="text-input message"
            placeholder="Enter Your Message"
            name="message"
          />
          <button type="submit" className="submit-button">
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
