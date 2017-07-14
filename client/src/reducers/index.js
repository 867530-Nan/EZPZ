import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import activities from './activities'
import children from './children'

const rootReducer = combineReducers({
  user,
  flash,
  activities,
  children,
})

export default rootReducer
