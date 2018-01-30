import { combineReducers } from 'redux'
import {products} from './products'
import {todos} from './cart'
import {counter} from './home'

const rootReducer = combineReducers({
  products,
  todos,
  counter
})

export default rootReducer