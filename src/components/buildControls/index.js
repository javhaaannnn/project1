import React from "react";
import css from "./style.module.css";
import BuildControl from "../buildControl";

function BuildControls(props) {
  return (
    <div className={css.BuildControls}>
      <p>Total price: {props.price}</p>
      <BuildControl
        type="tsuiwan"
        orts="Цуйван"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
        disable={props.disableBtn}
      />
      <BuildControl
        type="huushuur"
        orts="Хуушуур"
        ortsNemeh={props.ortsNemeh}
        disable={props.disableBtn}
      />
      <BuildControl
        type="tsai"
        orts="Цай"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
        disable={props.disableBtn}
      />
      <BuildControl
        type="shol"
        orts="Шөл"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
        disable={props.disableBtn}
      />
      <BuildControl
        type="salad"
        orts="Салат"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
        disable={props.disableBtn}
      />
    </div>
  );
}

export default BuildControls;
