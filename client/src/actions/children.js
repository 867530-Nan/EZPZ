import axios from 'axios'

export const addChild = (childInput) => {
  const { age, interestOne, interestTwo, interestThree, interestFour} = childInput
  const child = { age, interest: [interestOne, interestTwo, interestThree, interestFour] }
  return (dispatch) => {
    axios.post('/api/children', { child })
      .then( res => dispatch({ type: 'ADD_CHILD', app: res.data }) )
  }
}
