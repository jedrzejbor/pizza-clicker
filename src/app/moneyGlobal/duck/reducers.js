import types from './types';

const INITIAL_STATE = {
  amountMoney: 1000,
};

const moneyAmount = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.ADDITION_MONEY:
      return {
        ...state, amountMoney: state.amountMoney + action.moneyValue
      }
    case types.SUBTRACTION_MONEY:
      return {
        ...state, amountMoney: state.amountMoney - action.moneyValue
      }
    default:
      return state
  }
}

export default moneyAmount