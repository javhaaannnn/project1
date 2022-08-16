import React from "react";
import Button from "../Genaral/Button";

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
      <h4>Нийт үнэ:{props.price}</h4>
      <Button btnName="Буцах" btnType="success" />
      <Button btnName="Үргэлжлүүлэх" btnType="danger" />
    </div>
  );
}

export default OrderSummary;
