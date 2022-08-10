import React, { Component } from "react";
import Food from "../../components/Food";
import BuildControls from "../../components/buildControls";
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
  };

  ortsNemeh = (type) => {
    console.log("===> + " + type);
    const newOrts = { ...this.state.ortsnud };
    newOrts[type]++;
    this.setState({ ortsnud: newOrts });
  };
  render() {
    return (
      <div className="foodBuilder">
        <Food orts={this.state.ortsnud} />
        <BuildControls ortsNemeh={this.ortsNemeh} />
      </div>
    );
  }
}

export default FoodBuilder;
