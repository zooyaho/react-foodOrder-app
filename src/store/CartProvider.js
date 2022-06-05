/* cart-context 데이터를 관리하고, 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 역할의 컴포넌트 */
import React, { useReducer } from "react";
import CartCoctext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0, // 가격의 합
};
// 컴포넌트가 재평가될 때마다 항상 재생성되어서는 안되기 때문에 컴포넌틑 밖에서 선언함!
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // 일반적으로 객체를 사용함: 어떤 속성을 가지고 있고, 이를 통해 해당 액션을 식별할 수 있음.-> 리듀서 함수 내부에서,,,
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
