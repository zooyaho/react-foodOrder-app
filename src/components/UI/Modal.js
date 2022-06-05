import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const modalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, modalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalElement
      )}
    </Fragment>
  );
};

export default Modal;
