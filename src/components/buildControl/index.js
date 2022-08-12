import React from "react";
import css from "./style.module.css";
function BuildControl(props) {
  return (
    <div className={css.BuildControl}>
      <h3>{props.orts}</h3>
      <div className={css.btns}>
        <button onClick={() => props.ortsNemeh(props.type)} className={css.btn}>
          Нэмэх
        </button>
        <button
          disabled={props.disable[props.type]}
          onClick={() => props.ortsHasah(props.type)}
          className={css.btn}
        >
          Хасах
        </button>
      </div>
    </div>
  );
}

export default BuildControl;
