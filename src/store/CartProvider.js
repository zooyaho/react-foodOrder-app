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
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    // 추가된 음식의 state.items의 index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // 이미 카트에 추가된 음식인지, 없으면 null
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      // 이미 추가된 음식이면 원래있던 state에 해당 음식의 amount만 업데이트
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // 새롭게 추가된 음식이면 state에 새롭게 추가.
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      // 1개 남았을때 버튼을 누르면 해당 음식은 장바구니에서 삭제됨.
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // 버튼 클릭 시 1개씩 개수 줄어짐.
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

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
