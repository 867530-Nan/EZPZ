import axios from 'axios'

export const addChild = (childInput, history, user_id) => {
  const { age, realInterest} = childInput
  const child = { age, realInterest }
  return (dispatch, getState) => {
  	let { id } = getState().user;
    axios.post(`/api/user/${id}/children`, child)
      .then( res => {
        const { data: children, headers } = res;
      	dispatch({ type: 'ADD_CHILD', children, headers  })
	      history.push('/initial-login');
    	})
  }
}

export const getChild = (user_id, history) => {
  return (dispatch, getState) => {
    let { id } = getState().user;
    axios.get(`/api/user/${id}/children`)
    .then( res => {
      dispatch({ type: 'GET_CHILD', children: res.data, headers: res.headers  })
    })
  }
}
