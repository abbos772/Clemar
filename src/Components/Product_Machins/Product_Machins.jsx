import React from "react";
import { Link } from "react-router-dom";
import { products } from "../Products/Data";
import "./Product_Machins.scss";
import { GoArrowRight } from "react-icons/go";

const Product_Machins = () => {
  return (
    <div className="container">
      <div className="Mach" style={{ paddingTop: "50px" }}>
        <div className="Mach_text">
          <h1>Поломоечные машины</h1>
          <Link to="/products">
            <button>
              Смотреть все <GoArrowRight fontSize={16} />
            </button>
          </Link>
        </div>
        <div className="Mach_carts">
          {products.map((product) => (
            <div className="Mach_flex" key={product.id}>
              <div className="Mach_cart">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="mach_mini">
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

export default Product_Machins;
