// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/contact.css";

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
// import InstagramIcon from "../assets/icons/instagram";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-intro">
        <p className="contact-details">Drop me a note on:</p>
        <div className="contact-emails">
          <a
              href="mailto:akedia614@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            Email - akedia614@gmail.com
          </a>

          <a
              href="https://www.linkedin.com/in/aakriti-kedia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            LinkedIn - Aakriti Kedia
          </a>

        </div>
      </div>

      <div className="contact-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/aakriti-kedia/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="contact-icons linkedin"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/aakriti-kedia" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="contact-icons github"/>
            </a>
          </li>

          {/* <li>
            <a 
              href="https://www.instagram.com/aakriti.kedia/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="contact-icons instagram"/>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;