const children = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_CHILD':
      return [action.children, ...state]
    case 'GET_CHILD':
    	return action.children
    default:
      return state;
  }
}

export default children;
