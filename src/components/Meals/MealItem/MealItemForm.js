/* 사용자가 수량을 입력할 수 있는 폼(장바구니에 담고 싶은 음식의 수량)*/
import React from 'react';

import classes from './MealItemtForm.module.css';
import Input from '../../UI/input';

const MealItemForm = props =>{
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;