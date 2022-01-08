import types from './types';

const additionMoney = (moneyValue) => ({
  type: types.ADDITION_MONEY, moneyValue
})

const subtractionMoney = (moneyValue) => ({
  type: types.SUBTRACTION_MONEY, moneyValue
})

export default {
  additionMoney,
  subtractionMoney
}