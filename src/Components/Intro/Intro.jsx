import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Roles from '../Roles/Roles';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import FrontendImg from '../../img/front-end.gif'
import JavaBackendImg from '../../img/java-backend.gif'
import FullstackImg from '../../img/full-stack.gif'


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  const customVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: -5, opacity: 1 }
  };


  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    < div className="Intro" id="Intro">

      <motion.div
        initial={{ left: "-9rem" }}
        whileInView={{ left: "2rem" }}
        transition={transition}
        className="i-left"
      >
        <div className="i-name">

          <motion.span
            variants={customVariants}
            initial="initial"
            animate="animate"
            transition={transition}
            style={{ color: darkMode ? "white" : "" }}
          >
            Hi There
          </motion.span>
          <motion.span
            variants={customVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5, ...transition }}
            style={{ color: darkMode ? "white" : "" }}
          >
            I'm Mahesh
          </motion.span>
          <Roles />
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <motion.button
            variants={customVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1, ...transition }}
            // style={{ color: darkMode ? "white" : "" }}
            className="button i-button"
          >
            Hire me
          </motion.button>
        </Link>
        {/* social icons */}

        <motion.div
          initial={{ left: "0rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="i-icons"
        >
          <a href="https://github.com/Maheshh-Busam" ><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/mahesh-busam-5a630318b/" ><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/maheshh__busam/" ><img src={Instagram} alt="" /></a>
        </motion.div>
      </motion.div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img src={boy} alt="" />
        {/* animation */}

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >

        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "5rem", top: "25rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatinDiv img={FullstackImg} text1="Full-stack Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "20rem", top: "-2rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatinDiv img={JavaBackendImg} text1="Java Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "20rem", top: "12rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatinDiv img={FrontendImg} text1="Front-end Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "20rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
