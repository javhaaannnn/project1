import React from "react";
import css from "./style.module.css";
import BuildControl from "../buildControl";

function BuildControls(props) {
  return (
    <div className={css.BuildControls}>
      <BuildControl type="tsuiwan" orts="Цуйван" ortsNemeh={props.ortsNemeh} />
      <BuildControl
        type="huushuur"
        orts="Хуушуур"
        ortsNemeh={props.ortsNemeh}
      />
      <BuildControl type="tsai" orts="Цай" ortsNemeh={props.ortsNemeh} />
      <BuildControl type="shol" orts="Шөл" ortsNemeh={props.ortsNemeh} />
      <BuildControl type="salad" orts="Салат" ortsNemeh={props.ortsNemeh} />
    </div>
  );
}

export default BuildControls;
