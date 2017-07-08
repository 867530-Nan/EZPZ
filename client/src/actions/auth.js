import axios from 'axios';
import { setFlash } from '../actions/flash';

export const registerUser = (auth, history) => {
  const {
    email, password, passwordConfirmation,
    name, nickname, zipcode, street_address,
    city, state
  } = auth;
  return(dispatch) => {
    axios.post('/api/auth', { email, password, password_confirmation: passwordConfirmation,
                              name, nickname, zipcode, street_address, city, state })
      .then( res => {
        let { data: { data: user }, headers } = res;
        dispatch({ type: 'LOGIN', user, headers });
        history.push('/');
      })
      .catch( error => {
        const message = error.response.data.errors.join(',');
        dispatch(setFlash(message, 'error'));
    });
  }
}

export const handleLogout = (history) => {
  return(dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        dispatch({ type: 'LOGOUT' });
        dispatch(setFlash('Logged out successfully!', 'success'));
        history.push('/login');
      })
      .catch( error => {
        const message = error.response.data.errors.join(',');
        dispatch(setFlash(message, 'error'));
      });
    }
}

export const handleLogin = (email, password, history) => {
  return(dispatch) => {
    axios.post('/api/auth/sign_in', { email, password })
      .then( res => {
        let { data: { data: user }, headers } = res
        dispatch({ type: 'LOGIN', user, headers });
        history.push('/activities');
      })
      .catch( error => {
        const message = error.response.data.errors.join(',');
        dispatch(setFlash(message, 'error'));
      })
  }
}

export const validateToken = (cb = f => f) => {
  return (dispatch) => {
    dispatch({ type: 'VALIDATE_TOKEN' })
    let headers = axios.defaults.headers.common
    axios.get('/api/auth/validate_token', headers)
      .then( res => dispatch({ type: 'LOGIN', user: res.data.data }) )
      .catch(() => cb())
  }
}
