import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import activities from './activities'
import photos from './photos';
import children from './children';

const rootReducer = combineReducers({
  user,
  flash,
  activities,
  photos,
  children,
})

export default rootReducer
