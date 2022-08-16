import React, { Component } from "react";
import Food from "../../components/Food";
import BuildControls from "../../components/buildControls";
import Modal from "../../components/Genaral/Modal";
import OrderSummary from "../../components/OrderSummary";
const food_price = {
  salad: 5000,
  shol: 8000,
  tsuiwan: 10000,
  huushuur: 2000,
  tsai: 500,
};
const hoolni_ners = {
  tsuiwan: "Цуйван",
  huushuur: "Хуушуур",
  tsai: "Цай",
  shol: "Ногоотой шөл",
  salad: "Салат",
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
    zahialgaHaruulah: false,
  };

  showModal = () => {
    this.setState({ zahialgaHaruulah: true });
    console.log("bolsoooon");
    console.log(this.zahialgaHaruulah);
  };
  closeModal = () => {
    this.setState({ zahialgaHaruulah: false });
  };

  ortsNemeh = (type) => {
    // console.log("===> + " + type);
    const newOrts = { ...this.state.ortsnud };
    newOrts[type]++;
    const newPrice = this.state.totalPrice + food_price[type];
    this.setState({ totalPrice: newPrice, ortsnud: newOrts });
  };
  ortsHasah = (type) => {
    if (this.state.ortsnud[type] !== 0) {
      // console.log("===> - " + type);
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
        <Modal closeModal={this.closeModal} show={this.state.zahialgaHaruulah}>
          <OrderSummary
            zahialga={this.state.ortsnud}
            mongol_ner={hoolni_ners}
          />
        </Modal>
        <Food orts={this.state.ortsnud} />
        <BuildControls
          price={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disableBtn={disabledBtn}
          controls={hoolni_ners}
          showmodal={this.showModal}
          closemodal={this.closeModal}
        />
      </div>
    );
  }
}

export default FoodBuilder;
