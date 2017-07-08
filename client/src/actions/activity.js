import axios from 'axios';

export const getActivities = (cb) => {
  return (dispatch) => {
    axios.get('/api/activities')
    .then( res => dispatch({ type: 'ACTIVITIES', activities: res.data }) )
    .then( cb() )
  }
}
