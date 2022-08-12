import React from "react";

function Orts(props) {
  if (props.type === "tsuiwan")
    return (
      <div>
        <h3>Цуйван: {props.too}</h3>
      </div>
    );
  if (props.type === "tsai")
    return (
      <div>
        <h3>Цай: {props.too}</h3>
      </div>
    );
  if (props.type === "shol")
    return (
      <div>
        <h3>Шөл: {props.too}</h3>
      </div>
    );
  if (props.type === "salad")
    return (
      <div>
        <h3>Салат: {props.too}</h3>
      </div>
    );
  if (props.type === "huushuur")
    return (
      <div>
        <h3>Хуушуур: {props.too}</h3>
      </div>
    );
}

export default Orts;
