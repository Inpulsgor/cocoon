import React from "react";
import CartIcon from "@images/icons/cart.svg";
import { button, icon, count } from "./Cart.module.scss";

const Cart = () => {
  return (
    <button className={button} type="button">
      <img className={icon} src={CartIcon} alt="Cart logo" />
      <span className={count}>1</span>
    </button>
  );
};

export default Cart;
