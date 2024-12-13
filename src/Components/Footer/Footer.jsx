import React from "react";
import "./Footer.scss";
import logo from "./img/Log.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
       <a href="#Foot">
       <div className="foot">
          <div className="foot_logo">
            <img src={logo} alt="" />
            <p>Clemar – Представляем лучшие мировые бренды в Узбекистане</p>
          </div>
          <div className="foot_logo"></div>
          <div className="foot_text">
            <p>My Account</p>
            <p>My Wishlist</p>
            <p>My Cart</p>
            <p>Sing In</p>
            <p>Check Out</p>
          </div>
          <div className="foot_text">
            <h3>
              Phone: (+998) 93 772 09 30 <br />
              Fax: (+998) 772 0930
            </h3>
            <h3>
              New York, <br />
              96th Street, NY 10129
            </h3>
          </div>
        </div>
       </a>
      </div>
    </div>
  );
};

export default Footer;
