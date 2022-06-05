import React, { Fragment } from "react";

// 프로젝트의 로컬이미지는 import할 수 있는데, 그렇게 사용하면 app은 서버에 배포하여 해당 이미지에 대한 링크를 만듬. 그 링크는 만들어진 코드에 동적으로 삽입됨.
// 만약 서버에 있는 이미지면 "https://~~"로 src에 작성하면 됨.
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
