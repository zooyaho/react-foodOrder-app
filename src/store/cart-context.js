import React from 'react';

const CartCoctext = React.createContext({
  items:[],
  totalAmount: 0,
  addItem: (item)=>{},
  removeItem: (id)=>{},
});

export default CartCoctext;