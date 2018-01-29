import { combineReducers } from 'redux'
import {products} from './products'
import {todos} from './cart'

const rootReducer = combineReducers({
  products,
  todos
})

export default rootReducer