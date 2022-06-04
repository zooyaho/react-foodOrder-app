import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{/* 장바구니에 담긴 상품의 총량 */}3</span>
    </button>
  );
};

export default HeaderCartButton;
