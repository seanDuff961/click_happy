import * as actions from './actionTypes';
import axios from 'axios';

export const createUser = data => {
  return dispatch => axios.post('http://localhost:3001/users', data).then(createdUser => {

  });
}
