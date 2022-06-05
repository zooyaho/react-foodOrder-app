/* 사용자가 수량을 입력할 수 있는 폼(장바구니에 담고 싶은 음식의 수량)*/
import React, {useRef, useState } from "react";

import classes from "./MealItemtForm.module.css";
import Input from "../../UI/input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    // amount 유효성 검사
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    
  };


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!setAmountIsValid && <p>Please enter a vaild amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
