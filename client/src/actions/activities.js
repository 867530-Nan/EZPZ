import axios from 'axios';
import { setFlash } from './flash';


export const getActivities = (cb) => {
  return (dispatch) => {
    axios.get('/api/activities')
    .then( res => {
      cb(res.data);
      dispatch({ type: 'ACTIVITIES', activities: res.data })
    })
  }
}

export const addActivity = (id, activity) => {
	return (dispatch) => {
		axios.post(`api/activities//${id}/user_activities`, { activity: { activity }})
		.then( res => {
			const { data: activity, headers } = res;
			dispatch({ type: 'ADD USER ACTIVITY', activity, headers })
      dispatch(setFlash('Successfully added Activity', 'success'));
		})
		.catch( res => {
        dispatch(setFlash('Activity Failed To Add', 'error'));
    });
	}
}
