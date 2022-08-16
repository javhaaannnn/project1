import React from "react";
import css from "./style.module.css";
import Orts from "../Orts";
function Food(props) {
  // console.log(props.orts);
  const items = Object.entries(props.orts);
  // console.log(items);
  let content = [];
  items.map((el) => {
    content.push(<Orts key={el[0]} type={el[0]} too={el[1]} />);
    // for (let i = 0; i < el[1]; i++) {
    //   content.push(<Orts key={`${el[0]}${i + 1}`} type={el[0]} />);
    // }
  });
  if (content.length === 0) content = <p>Хоолоо сонгон уу</p>;
  return <div className={css.foodX}>{content}</div>;
}

export default Food;
