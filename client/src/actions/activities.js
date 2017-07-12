import axios from 'axios';

export const getActivities = (cb) => {
  return (dispatch) => {
    axios.get('/api/activities')
    .then( res => {
      cb(res.data);
      dispatch({ type: 'ACTIVITIES', activities: res.data })
    })
  }
}
