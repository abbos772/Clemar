import React from "react";
import { useLocation } from "react-router-dom";
import './Kate.scss'
const Kate = () => {
  const location = useLocation();
  const products = location.state || []; 

  return (
    <div className="container">
      <h1>Kategoriya bo'yicha mahsulotlar</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>Hech qanday mahsulot topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default Kate;
