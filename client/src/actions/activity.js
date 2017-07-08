import axios from 'axios'

export const getActvities = (cb) => {
  return (dispatch) => {
    axios.get('/api/activities')
    .then( res => dispatch({ type: 'ACTIVITIES' activities: res.data }) )
    .then( cd() )
  }
}
