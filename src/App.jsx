import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product_detals from "./Components/Product_detals/Product_detals"; // This should work now
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product_detals />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
