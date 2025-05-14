import React from "react";
import "../../assets/styles/footer.css";
import { FaInbox, FaEarthAmericas, FaFacebookF, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="topFooter">
          <div className="footerImg">
            <a href="#">
              <img src="public\images\yellowdot2.png" alt="yellow dot logo" />
            </a>
          </div>
          <div className="contacts">
            <div className="actualContacts">
              <span className="email">
                <FaInbox /> Email:
                <a href="mailto:info@yellowdotafrica.com">
                  info@yellowdotafrica.com
                </a>
              </span>

              <span className="website">
                <FaEarthAmericas /> Website:
                <a
                  href="https://yellowdotafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://yellowdotafrica.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="lowFooter">
          <div className="copyright">
            <span>
              <p>
                <FaRegCopyright /> Copyright
              </p>
              <span>yellowdotafrica</span>
            </span>
          </div>
          <div className="socials">
            <ul>
              <li className="socialMedia">
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="socialMedia">
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li className="socialMedia">
                <a href="https://github.com/Yellowdot-Africa">
                  <FaGithub />
                </a>
              </li>
              <li className="socialMedia">
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
