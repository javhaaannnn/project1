import React from "react";
import styles from "./style.module.css";
const Shadow = (props) => {
  return props.show ? (
    <div className={styles.shadow} onClick={() => props.closeModal()}></div>
  ) : null;
};

export default Shadow;
