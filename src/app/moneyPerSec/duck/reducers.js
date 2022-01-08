import types from './types';

const INITIAL_STATE = {
  counter_data: 0,
  buttons: [
  {
    id: 0,
    number: "01.",
    title: "Employee",
    money: 50,
  },
  {
    id: 1,
    number: "02.",
    title: "Advertisment",
    money: 500,
  },
  {
    id: 2,
    number: "03.",
    title: "Scooter",
    money: 5000,
  },
  {
    id: 3,
    number: "04.",
    title: "Car",
    money: 50000,
  },
  {
    id: 4,
    number: "05.",
    title: "Premises",
    money: 500000,
  },
]};

const moneyPerSec = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.MORE_MONEY_SEC:
      return {
        ...state,
        buttons: state.buttons.map(button => button.id === action.number ? {
          ...button, money: Math.round(
            button.money + (button.money / 100) * 5
          )} : button),
        counter_data: state.counter_data + (state.buttons[action.number].money / 1000)
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

export default moneyPerSec