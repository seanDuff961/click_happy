// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk';
// import loggingMiddleware from 'redux-logger';
// import axios from 'axios'

const GOT_NEW_USER = 'GOT_NEW_USER';
const GOT_NEW_SCORE = 'GOT_NEW_SCORE';

const intialState = {
  users: [],
  scores: []
}

// function reducer(state, action) {
//   console.log('reducer', state, action);
//   return state;
// }

// const store = createStore(reducer);

// const App = () => (
//   <div>
//     <Counter/>
//     <Timer/>
//   </div>
// )

