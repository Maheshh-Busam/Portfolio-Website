import "./Skills.css";
import { useState, useContext } from "react";
import { allTabs as tabs } from "./Tabs";
import { motion, AnimatePresence } from "framer-motion";
import { themeContext } from "../../Context";
import Resume from './resume.pdf'


function Skills() {


  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };

  return (
    <div>
      <motion.div
        initial={{ left: "-9rem" }}
        whileInView={{ left: "2rem" }}
        transition={transition}
        className="skills"
      >

        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Skills &</span>
        <span>Experience</span>
        <a href="https://drive.google.com/file/d/1KOHG_Tv6Nd9HxB22dBJtfjOBJZYB_5sf/view" target="_blank" ><button className="button s-button">View Resume</button></a>
        <a href={Resume} download>
          <button className="button s-button">Download</button>
        </a>

      </motion.div>

      <div className="window"
      >

        <nav>
          <ul className="tabs"
          >

            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : "tab-item"}
                onClick={() => {
                  setSelectedTab(item);
                }}
              >
                {`${item.label}`}
                {item === selectedTab ? (

                  <div>
                    <ul className="on-mobile">
                      {selectedTab.skills.map((skill, index) => (
                        <li key={index}>
                          <h1>{skill.label}</h1>
                          <img src={`${selectedTab.icons[index]}`} alt={skill} />
                          <span style={{ fontSize: "16px" }}>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>

            ))}


          </ul>
        </nav>

        <main className="desktop-responsive"
        >
          <AnimatePresence mode="wait">
            {selectedTab && (
              <motion.div
                key={selectedTab.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* <h2>{selectedTab.label}</h2> */}
                <ul className="ul">
                  {selectedTab.skills.map((skill, index) => (
                    <li key={index}>
                      <img src={`${selectedTab.icons[index]}`} alt={skill} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

      </div>
    </div>

  );
}
export default Skills;
