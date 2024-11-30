import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Hero_Swiper.scss";
import { FaCheck } from "react-icons/fa6";
export default function App() {
  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
    >
      <SwiperSlide>
        <div className="Hero_img img">
          <div className="container">
            <div className="Hero__img__text">
              <h1>Дистрибьютер более 25 мировых брендов в Узбекистане</h1>
              <div className="checks">
                <div className="check">
                  <FaCheck />
                  <p>Топ бренды</p>
                </div>
                <div className="check">
                  <FaCheck />
                  <p>Высокое качество</p>
                </div>
                <div className="check">
                  <FaCheck />
                  <p>Бесплатная доставка</p>
                </div>
              </div>
              <button>Купить</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Hero_img img2">
          <div className="container">
            <div className="Hero__img__text">
              <h1>Дистрибьютер более 25 мировых брендов в Узбекистане</h1>
              <div className="checks">
                <div className="check">
                  <FaCheck />
                  <p>Топ бренды</p>
                </div>
                <div className="check">
                  <FaCheck />
                  <p>Высокое качество</p>
                </div>
                <div className="check">
                  <FaCheck />
                  <p>Бесплатная доставка</p>
                </div>
              </div>
              <button>Купить</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Hero_img img3">
          <div className="container">
            <div className="Hero__img__text">
              <h1>Дистрибьютер более 25 мировых брендов в Узбекистане</h1>
              <div className="checks">
                <div className="check">
                  <FaCheck />
                  <p>Топ бренды</p>
                </div>
                <div className="check">
                  <FaCheck />
                  <p>Высокое качество</p>
                </div>
                <div className="check">
                  <FaCheck />
                  <p>Бесплатная доставка</p>
                </div>
              </div>
              <button>Купить</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
