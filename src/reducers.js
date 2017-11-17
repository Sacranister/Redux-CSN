import { combineReducers } from 'redux'
import ProductListReducer from './modules/list'

const reducers = combineReducers({
  list: ProductListReducer,
})

export default reducers
