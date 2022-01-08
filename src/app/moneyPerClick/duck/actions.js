import types from './types';

const more = (number, moneyMore) => ({
  type: types.MORE_MONEY_CLICK, number , moneyMore
})

const add = item => ({
  type: types.ADD_ITEM, item
})

export default {
  more,
  add
}