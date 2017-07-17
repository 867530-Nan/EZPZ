const userActs = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD USER ACTIVITY':
      return [...state, action.activity]
    default:
      return state;
  }
}

export default userActs;
