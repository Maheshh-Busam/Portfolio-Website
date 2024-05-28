import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import ScrollToTopBtn from "./Components/ScrollUp/ScrollToTopBtn";



function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTopBtn />
    </div>
  )
}

export default App