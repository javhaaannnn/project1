import React from "react";

function Orts(props) {
  if (props.type === "tsuiwan")
    return (
      <div>
        <h3>Цуйван</h3>
        <h4>{props.too}</h4>
      </div>
    );
  if (props.type === "tsai")
    return (
      <div>
        <h3>Цай</h3>
        <h4>{props.too}</h4>
      </div>
    );
  if (props.type === "shol")
    return (
      <div>
        <h3>Шөл</h3>
        <h4>{props.too}</h4>
      </div>
    );
  if (props.type === "salad")
    return (
      <div>
        <h3>Салат</h3>
        <h4>{props.too}</h4>
      </div>
    );
  if (props.type === "huushuur")
    return (
      <div>
        <h3>Хуушуур</h3>
        <h4>{props.too}</h4>
      </div>
    );
}

export default Orts;
