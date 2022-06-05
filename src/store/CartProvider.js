/* cart-context 데이터를 관리하고, 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 역할의 컴포넌트 */
import React from "react";
import CartCoctext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartCoctext.Provider value={cartContext}>
      {props.children}
    </CartCoctext.Provider>
  );
};

export default CartProvider;
