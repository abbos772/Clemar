import React from "react";
import "./Pro_bumaga.scss";
import { GoArrowRight } from "react-icons/go";
import { pro2 } from "../Products/Data";
import { Link } from "react-router-dom";
const Pro_bumaga = () => {
  return (
    <div className="container">
      <div className="Mach" style={{ paddingTop: "50px" }}>
        <div className="Mach_text">
          <h1>Бумажная продукция</h1>
          <Link to="/kate" state={pro2}>
  <button>
    Смотреть все <GoArrowRight fontSize={16} />
  </button>
</Link>
        </div>
        <div className="Mach_carts">
          {pro2.map((product) => (
            <div className="Mach_flex" key={product.id}>
              <div className="Mach_cart">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="mach_mini" style={{ height: "170px" }}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/product/${product.id}`} state={product}>
                  <button>Подробнее</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pro_bumaga;
