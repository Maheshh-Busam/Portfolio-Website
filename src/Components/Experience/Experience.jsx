import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import tcsImg from '../../img/tcs.png'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="exp-section" >
      <div className="experience" id='experience'>
        <div className="exp-years">
          {/* darkMode */}
          <div className="circle" style={{ color: darkMode ? 'white' : '' }}>  2+</div>
          <span style={{ color: darkMode ? 'var()' : '' }}>years </span>
          <span>Experience</span>
        </div>
        <div className="exp-details">
          <div className="logo">
            <img src={tcsImg} alt="" /><br />
            <span>2021 - 2024</span>
          </div>
          <ol>
            <li>Worked as a Web Developer, where I implemented UI features using React.js</li>
            <li>Dealing with backend RESTful web services using Spring boot & Microservices</li>
          </ol>
        </div>
      </div>
    </div>

  );
};

export default Experience;
