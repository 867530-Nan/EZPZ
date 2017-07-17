import { setFlash } from './flash';
import axios from 'axios';

const addPhoto = (photo) => {
  return { type: 'ADD_PHOTO', photo }
}

const setPhotos = (photos) => {
  return { type: 'SET_PHOTOS', photos }
}

export const handleUpload = (photo) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(photo.name, photo);
    axios.post(`/api/user/photos`, data)
      .then( res => {
        dispatch({type: 'UPDATE_USER_PHOTO', user: res.data});
      })
      .catch( res => {
        dispatch(setFlash('Error uploading file. Please try again!', 'error'));
    });
  }
}
