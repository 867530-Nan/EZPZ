const activities = ( state = [], action) => {
  switch (action.type) {
    case 'ACTIVITIES':
    return action.activities;
  }
}

export default activities;
