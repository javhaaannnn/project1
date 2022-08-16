import React from "react";
import Shadow from "../Shadow";
import style from "./style.module.css";

function Modal(props) {
  return (
    <div>
      <Shadow show={props.show} />
      <div
        onClick={props.closeModal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={style.modal}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
