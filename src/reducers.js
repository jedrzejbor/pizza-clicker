import { combineReducers } from 'redux'
import moneyPerSecReducer from './app/moneyPerSec/duck'
import moneyPerClickReducer from './app/moneyPerClick/duck'
import moneyAmountReducer from './app/moneyGlobal/duck'

const rootReducer = combineReducers({
  moneyPerClick: moneyPerClickReducer,
  moneyPerSec: moneyPerSecReducer,
  moneyAmount: moneyAmountReducer,
})

export default rootReducer