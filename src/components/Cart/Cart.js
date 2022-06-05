/* 장바구니 모달창 컴포넌트 */
import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  // 장바구니 항목(더미데이터)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "C1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        {/* 총 수량 -> 하드코딩 해둠.*/}
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      {/* 장바구니에 대한 action: 닫기 및 주문 버튼 */}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
