import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
        {" "}
        <img src={logo} alt="" />
      </div>
          <div className="test">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
