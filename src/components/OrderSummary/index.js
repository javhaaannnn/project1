import React from "react";

function OrderSummary(props) {
  return (
    <div>
      Таны захиалга
      <p>Таны сонгосон хоолнууд:</p>
      <ul>
        {Object.keys(props.zahialga).map((el) => (
          <li key={el}>
            {props.mongol_ner[el]}: {props.zahialga[el]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderSummary;
