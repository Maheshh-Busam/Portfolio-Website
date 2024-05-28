import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import './Roles.css'
import { themeContext } from '../../Context';


function Roles() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="type-writer" style={{ color: darkMode ? "white" : " " }}>
      <Typewriter 
        options={{
          strings: ['Full Stack Developer','Front-end Developer', 'Java Developer', 'Freelancer'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Roles;
