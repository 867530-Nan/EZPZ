import axios from 'axios'

export const addChild = (childInput, history, user_id) => {
  const { age, interestOne, interestTwo, interestThree, interestFour} = childInput
  const child = { age, interest: [interestOne, interestTwo, interestThree, interestFour] }
  return (dispatch, getState) => {
  	let { id } = getState().user;
    axios.post(`/api/user/${user_id}/children`, child)
      .then( res => {
      	console.log(res.data)
      	dispatch({ type: 'ADD_CHILD', children: res.data }) 
	      history.push('/initial-login');
    	})
  }
}
