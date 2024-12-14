import React from "react";
import { useLocation, Link } from "react-router-dom";
import { products,pro2 } from "../Products/Data"; 
import "./Product_detals.scss";

const Product_detals = () => {
  const location = useLocation();
  const product = location.state;

  const otherProducts = products.filter((item) => item.id !== product?.id);
  const otherProducts2 = pro2.filter((item) => item.id !== product?.id);

  return (
    <div className="container">
      {product ? (
        <div>
          <div className="single_nav">
            <p>Главная / {product.name}</p>
          </div>
          <div className="all_flex">
            <div className="single_flex">
              <div className="single_img">
                <img src={product.image} alt="" />
              </div>
              <div className="single_mins">
                <div className="single_min">
                  <img src={product.image} width={80} alt="" />
                </div>
                <div className="single_min">
                  <img src={product.image} width={80} alt="" />
                </div>
                <div className="single_min">
                  <img src={product.image} width={80} alt="" />
                </div>
                <div className="single_min">
                  <img src={product.image} width={80} alt="" />
                </div>
              </div>
            </div>
            <div className="single_text">
              <h1>{product.name}</h1>
              <div className="inner_text">
                <p>Модель: {product.name}</p>
                <p>Ширина щётки: {product.bir}</p>
                <p>Всасывающая балка: {product.ikki}</p>
                <p>Макс. производительность: {product.uch}</p>
                <p>Давление щётки: {product.tort}</p>
              </div>
            </div>
          </div>

       
          <div className="related_products">
            <h2>Другие товары</h2>
            <div className="Mach_carts">
              {otherProducts.map((item) => (
                <div className="Mach_flex" key={item.id}>
                  <div className="Mach_cart">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="mach_mini">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <Link to={`/product/${item.id}`} state={item}>
                      <button>Подробнее</button>
                    </Link>
                  </div>
                </div>
              ))}
                {otherProducts2.map((item) => (
                <div className="Mach_flex" key={item.id}>
                  <div className="Mach_cart">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="mach_mini">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <Link to={`/product/${item.id}`} state={item}>
                      <button>Подробнее</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Product not found</h2>
          <p>
            The product you are looking for does not exist or has been removed.
          </p>
          <Link to="/">
            <button style={{ marginTop: "20px" }}>Вернуться</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Product_detals;
