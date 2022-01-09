import types from './types';

const INITIAL_STATE = {
  counter_data: 1,
  buttons: [
  {
    id: 0,
    number: "01.",
    title: "Margharita",
    money: 50,
  },
  {
    id: 1,
    number: "02.",
    title: "Funghi",
    money: 500,
  },
  {
    id: 2,
    number: "03.",
    title: "Capriciosa",
    money: 5000,
  },
  {
    id: 3,
    number: "04.",
    title: "Hawaii",
    money: 50000,
  },
  {
    id: 4,
    number: "05.",
    title: "Chicken",
    money: 500000,
  },
]};

const moneyPerClick = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.MORE_MONEY_CLICK:
      return {
        ...state,
        buttons: state.buttons.map(button => button.id === action.number ? {
          ...button, money: Math.round(
            button.money + (button.money / 100) * 13
          )} : button),
        counter_data: state.counter_data + (state.buttons[action.number].money / 100)
        };
    // case types.ADD_ITEM:
    //   return {
    //     ...state, [6]:{
    //        id: 4,
    //        number: "05.",
    //        title: "Car",
    //        money: action.item,
    //     }
    //   }
  default:
    return state
  }
}

export default moneyPerClick