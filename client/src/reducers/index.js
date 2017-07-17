import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import activities from './activities'
import photos from './photos';

const rootReducer = combineReducers({
  user,
  flash,
  activities,
  photos,
})

export default rootReducer
