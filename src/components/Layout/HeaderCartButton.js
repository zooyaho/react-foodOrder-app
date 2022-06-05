import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartCoctext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartCoctext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.ammount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <CartIcon />
      <span>Your Cart</span>
      <span className={classes.badge}>
        {/* 장바구니에 담긴 상품의 총량 */}
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
