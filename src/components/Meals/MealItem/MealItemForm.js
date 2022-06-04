/* 사용자가 수량을 입력할 수 있는 폼(장바구니에 담고 싶은 음식의 수량)*/
import React from 'react';
import Input from '../../UI/Input';

import classes from './MealItemtForm.module.css';

const MealItemForm = props =>{
  return (
    <form className={classes.form}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;