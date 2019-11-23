import * as actions from './actionTypes';
import axios from 'axios';

export const createUser = userData => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/users', userData);
      dispatch(createUserSuccess(data));
    } catch (err) {
      dispatch(createUserFailure(err));
    }
  }
}

const createUserSuccess = createdUser => {
  return {
    type: actions.CREATE_USER_SUCCESS,
    payload: createdUser
  }
}

const createUserFailure = error => {
  return {
    type: actions.CREATE_USER_FAILURE,
    error
  }
}

export const getUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/users');
      dispatch(getUsersSuccess(data));
    } catch (err) {
      dispatch(getUsersFailure(err));
    }
  }
}

const getUsersSuccess = users => {
  return {
    type: actions.GET_USERS_SUCCESS,
    payload: users
  }
}

const getUsersFailure = error => {
  return {
    type: actions.GET_USERS_FAILURE,
    error
  }
}
