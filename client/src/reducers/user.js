const user = (state = {}, action ) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...action.user }
    case 'LOGOUT':
      return {}
    case 'REGISTER':
    	return { ...action.user }
    case 'UPDATE_USER_PHOTO':
      return { ...action.user }
    default:
      return state;
  }
}

export default user;
