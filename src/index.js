// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

const initialState = {
  result: 1,
  lastValues: [],
  userName: 'Tole'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SUBSTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('Store updated', store.getState());
});

store.dispatch({
  type: 'ADD',
  payload: 100
});

store.dispatch({
  type: 'ADD',
  payload: 22
});

store.dispatch({
  type: 'SUBSTRACT',
  payload: 80
});