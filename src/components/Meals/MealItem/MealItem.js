import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li key={props.id}>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>{/* 사용자가 수량을 입력할 수 있는 폼(장바구니에 담고 싶은 음식의 수량)*/}</div>
    </li>
  );
};

export default MealItem;
