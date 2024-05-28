import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Github from '../../img/github.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mahesh.busam2206@gmail.com</span>
        <div className="f-icons">
         <a href="https://github.com/Maheshh-Busam" ><img src={Github} alt="" /></a>
         <a href="https://www.linkedin.com/in/mahesh-busam-5a630318b/" ><img src={LinkedIn} alt="" /></a>
         <a href="https://www.instagram.com/maheshh__busam/" ><img src={Instagram} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
