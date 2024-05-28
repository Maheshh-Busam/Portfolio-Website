import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import TodoApp from '../../img/todo-App.png';
import eShopApp from '../../img/eShop-App.png';
import myInsta from '../../img/myInsta-App.png';
import OnlineShop from '../../img/onlineShop-App.png';
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
      >
        <SwiperSlide>
          <img src={myInsta} alt="" />
          <div className="links">
            <a className="button" href="https://myinsta-eta.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
            <a className="button" href="https://github.com/Maheshh-Busam/myInsta-WebApp.git" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={eShopApp} alt="" />
          <div className="links">
            <a className="button" href="https://e-commerce-eshop.web.app/" target="_blank" rel="noopener noreferrer">Demo</a>
            <a className="button" href="https://github.com/Maheshh-Busam/e-Shop.git" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={TodoApp} alt="" />
          <div className="links">
            <a className="button" href="https://mahesh-todoapp.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
            <a className="button" href="https://github.com/Maheshh-Busam/Todo_App.git" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={OnlineShop} alt="" />
          <div className="links">
            <a className="button" href="https://maheshh-busam.github.io/Ecommerce_Project/" target="_blank" rel="noopener noreferrer">Demo</a>
            <a className="button" href="https://github.com/Maheshh-Busam/Ecommerce_Project.git" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
