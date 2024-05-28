import React from 'react';
import './ScrollToTopBtn.css';
import ScrollUpImg from '../../img/scrollup.png';

function ScrollToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scroll-to-top-button button"  onClick={scrollToTop}>
      <img src={ScrollUpImg} className="scroll-to-top-button" onClick={scrollToTop} />
    </button>
  );
}

export default ScrollToTopBtn;
