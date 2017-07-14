const children = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_CHILD':
      return [action.children, ...state]
    default:
      return state;
  }
}

export default children;
