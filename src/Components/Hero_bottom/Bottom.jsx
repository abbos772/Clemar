import React from "react";
import "./Bottom.scss";
import img1 from "./imgs/1.svg";
import img2 from "./imgs/2.svg";
import img3 from "./imgs/3.svg";
import img4 from "./imgs/4.svg";
const Bottom = () => {
  return (
    <div className="bottom">
      <div className="container">
        <div className="bottom_flex">
          <div className="bottom_cart">
            <img src={img1} alt="" />
            <h1>Безопасная оплата</h1>
            <p>100% безопасная оплата</p>
          </div>
          <div className="bottom_cart">
            <img src={img2} alt="" />
            <h1>Возврат в течение 30 дней</h1>
            <p>Если у товара есть проблемы</p>
          </div>
          <div className="bottom_cart">
            <img src={img3} alt="" />
            <h1>Поддержка 24/7</h1>
            <p>Круглосуточная поддержка</p>
          </div>
          <div className="bottom_cart">
            <img src={img4} alt="" />
            <h1>Бесплатная доставка</h1>
            <p>Для всех заказов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
