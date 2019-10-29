import * as actions from './actionTypes';
import axios from 'axios';

/*
export const createUser = data => {
  return dispatch => axios.post('http://localhost:3001/users', data).then(res => {
    dispatch(createUserSuccess(res.data));
  }).catch(err => {
    dispatch(createUserFailure(err))
  })
}
*/

export const createUser = data => {
  return dispatch => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    dispatch(createUserSuccess(data));
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

/*
export const getUsers = () => {
  return dispatch => axios.get('http://localhost:3001/users').then(res => {
    dispatch(getUsersSuccess(res.data));
  }).catch(err => {
    dispatch(getUsersFailure(err))
  })
}
*/

export const getUsers = () => {
  return dispatch => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    dispatch(getUsersSuccess(users));
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
