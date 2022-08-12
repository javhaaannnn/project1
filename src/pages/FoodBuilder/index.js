import React, { Component } from "react";
import Food from "../../components/Food";
import BuildControls from "../../components/buildControls";
const food_price = {
  salad: 5000,
  shol: 8000,
  tsuiwan: 10000,
  huushuur: 2000,
  tsai: 500,
};
class FoodBuilder extends Component {
  // constructor(props) {
  //     super(props);
  // }

  state = {
    ortsnud: {
      tsuiwan: 0,
      salad: 0,
      shol: 0,
      tsai: 0,
      huushuur: 0,
    },
    totalPrice: 0,
  };

  ortsNemeh = (type) => {
    console.log("===> + " + type);
    const newOrts = { ...this.state.ortsnud };
    newOrts[type]++;
    const newPrice = this.state.totalPrice + food_price[type];
    this.setState({ totalPrice: newPrice, ortsnud: newOrts });
  };
  ortsHasah = (type) => {
    if (this.state.ortsnud[type] !== 0) {
      console.log("===> - " + type);
      const newOrts = { ...this.state.ortsnud };
      newOrts[type]--;
      const newPrice = this.state.totalPrice - food_price[type];
      this.setState({ totalPrice: newPrice, ortsnud: newOrts });
    }
  };
  render() {
    const disabledBtn = { ...this.state.ortsnud };
    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
      // console.log(key + "====> " + disabledBtn[key]);
    }
    return (
      <div className="foodBuilder">
        <Food orts={this.state.ortsnud} />
        <BuildControls
          price={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disableBtn={disabledBtn}
        />
      </div>
    );
  }
}

export default FoodBuilder;
