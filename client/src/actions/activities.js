import axios from 'axios';

export const getActivities = () => {
  return (dispatch) => {
    axios.get('/api/activities')
    .then( res => {
      console.log(res.data)
      dispatch({ type: 'ACTIVITIES', activities: res.data })
    })
  }
}
