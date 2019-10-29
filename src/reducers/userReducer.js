import * as actions from "../actions/actionTypes";

const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_USER_SUCCESS:
      return { ...state, users: state.users.concat(action.payload) };
    case actions.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
