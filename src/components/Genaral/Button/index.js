import React from "react";
import styles from "./style.module.css";
function Button(props) {
  return (
    <button className={`${styles.btn} ${styles[props.btnType]}`}>
      {props.btnName}
    </button>
  );
}

export default Button;
