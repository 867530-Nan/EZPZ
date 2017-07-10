import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import activities from './activities'

const rootReducer = combineReducers({
  user,
  flash,
  activities,
})

export default rootReducer
