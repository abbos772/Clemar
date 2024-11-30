import React, { useState } from "react";
import "./Navbar.scss";
import Log from "./Img/Log.png";
import { IoMenuOutline, IoSearch } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="Navbar">
      <div className="Nav container">
        <div className="Logo">
          <img src={Log} alt="Logo" width={140} />
          <select name="catalog" id="catalog">
            <option value="catalog">КАТАЛОГ</option>
          </select>
        </div>
        <div className={`nav_box ${toggle ? "show" : ""}`}>
          <div className="Nav_com">
            <h3 id="not">About Us</h3>
            <h3 id="not">Cart</h3>
            <h3 id="not">CheckOut</h3>
            <h3 id="not">Contact</h3>
            <h3 id="not">Home</h3>
            <h3 id="not">My Account</h3>
            <h3 id="not">News</h3>
            <h3 id="not">Products</h3>
            <h3 id="not">Services</h3>
            <IoSearch id="Search" />
            <CgShoppingBag id="Shopping" />
            <p id="Shopping">
              Режим работы: <br />
              Пн-Пт с 9:00 до 18:00
            </p>
            <button>ОТДЕЛ ПРОДАЖ</button>
          </div>
          <button
            id="menu_close"
            className="menu"
            onClick={() => setToggle(!toggle)}
          >
            <IoMdClose fontSize={30} />
          </button>
        </div>
        <div className="shopBag">
          <CgShoppingBag />
          <button className="menu" onClick={() => setToggle(!toggle)}>
            <IoMenuOutline fontSize={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
