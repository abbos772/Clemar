import React from "react";
import "./Kate.scss";
import { GoArrowRight } from "react-icons/go";
import bir from "./imgs/1.png";
import ikki from "./imgs/2.png";
import uch from "./imgs/3.png";
import tort from "./imgs/4.png";
import besh from "./imgs/5.png";
const Kate = () => {
  return (
    <div className="container">
      <div className="Kate">
        <div className="Kate_text">
          <h1>Категории​</h1>
          <button>
            Смотреть все <GoArrowRight fontSize={16} />
          </button>
        </div>
        <div className="kate_carts">
          <div className="kate_flex">
            <div className="kate_cart">
              <img src={bir} alt="" />
            </div>
            <h3>Бумажная продукция</h3>
          </div>
          <div className="kate_flex">
            <div className="kate_cart">
              <img src={tort} alt="" />
            </div>
            <h3>Моющие средства</h3>
          </div>
          <div className="kate_flex">
            <div className="kate_cart">
              <img src={uch} alt="" />
            </div>
            <h3>Поломоечные машины</h3>
          </div>
          <div className="kate_flex">
            <div className="kate_cart">
              <img src={ikki} alt="" />
            </div>
            <h3>Пылесосы</h3>
          </div>
          <div className="kate_flex">
            <div className="kate_cart">
              <img src={besh} alt="" />
            </div>
            <h3>Уборочные инвентарь</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kate;
