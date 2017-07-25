import axios from 'axios'

export const addChild = (childInput, history, user_id) => {
  const { age, realInterest} = childInput
  const child = { age, realInterest }
  return (dispatch, getState) => {
  	let { id } = getState().user;
    axios.post(`/api/user/${id}/children`, child)
      .then( res => {
        console.log(res.data)
      	dispatch({ type: 'ADD_CHILD', children: res.data }) 
	      history.push('/initial-login');
    	})
  }
}
