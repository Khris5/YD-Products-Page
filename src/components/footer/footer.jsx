import React from "react";
import "../../assets/styles/footer.css";
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
                <i className="fa-solid fa-inbox"></i> Email:
                <a href="mailto:info@yellowdotafrica.com">
                  info@yellowdotafrica.com
                </a>
              </span>

              <span className="website">
                <i className="fa-solid fa-earth-americas"></i> Website:
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
                <i className="fa-regular fa-copyright"></i> Copyright
              </p>
              <span>yellowdotafrica</span>
            </span>
          </div>
          <div className="socials">
            <ul>
              <li className="socialMedia">
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="socialMedia">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="socialMedia">
                <a href="https://github.com/Yellowdot-Africa">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="socialMedia">
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
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
