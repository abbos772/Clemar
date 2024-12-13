import React from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import Hero_bottom from "../Hero_bottom/Bottom";
import Kate from "../Kategoriya/Kate";
import Product_Machins from "../Product_Machins/Product_Machins";
import Pro_bumaga from "../Product_bumaga/Pro_bumaga";
import Brends from "../Brends/Brends";
const Home = () => {
  return (
    <div>
      <Hero />
      <Hero_bottom />
      <Kate />
      <Product_Machins />
      <Pro_bumaga />
      <Brends/>
    </div>
  );
};

export default Home;
