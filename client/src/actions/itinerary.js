import axios from 'axios';
import { setFlash } from './flash';

export const getSavedActivities = () => {
  return (dispatch) => {
    axios.get('api/activity_user_activities')
    .then( res => {
      dispatch({ type: 'SAVEDACTIVITIES', activities: res.data, headers: res.headers  })
    })
  }
}
