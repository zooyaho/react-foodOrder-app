import React from "react";
import classes from "./Input.module.css";

const input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
      {/* 요소에 전개연산자 사용 -> {...props.input}: props.input에서 받아온 이 input객체에 있는 모든 키-값 쌍을 프롭으로 input에 추가할 수 있음!!, id={props.input.id} 생략 가능 */}
    </div>
  );
});

export default input;
