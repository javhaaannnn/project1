import React from "react";
import css from "./style.module.css";
import BuildControl from "../buildControl";

function BuildControls(props) {
  return (
    <div className={css.BuildControls}>
      <p>Total price: {props.price}</p>
      {Object.keys(props.controls).map((el) => (
        <BuildControl
          key={el}
          type={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disable={props.disableBtn}
          orts={props.controls[el]}
        />
      ))}

      <button disabled={props.price <= 0} onClick={props.showmodal}>
        Zahialah
      </button>
    </div>
  );
}

export default BuildControls;
