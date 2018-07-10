//import { createStore } from 'redux'

//var createStore = require('redux/createStore');
var createStore = require('redux').createStore
var expect = require('expect');
var deepFreeze = require('deep-freeze');

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state;
      }
      else {
        return {
          ...state,
          completed: !state.completed
        };
      }
    default:
      return state;

  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (

)

const store = createStore(todos);


console.log('Initial state:');
console.log(store.getState());
console.log('--------------');



console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'SHopping hell'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');


console.log('Dispatching TOGGLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0,
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');












// const testAddTodo = () => {
//   const stateBefore = [];
//   const action = {
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Learn Redux'
//   };
//   const stateAfter = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     }
//   ];
//
//   deepFreeze(stateBefore);
//   deepFreeze(action);
//
//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter);
// };
//
// const testToggleTodo = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     },
//     {
//       id: 1,
//       text: 'Shop to hell',
//       completed: false
//     }
//   ];
//
//   const action = {
//     type: 'TOGGLE_TODO',
//     id: 1
//   };
//
//
//   const stateAfter = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     },
//     {
//       id: 1,
//       text: 'Shop to hell',
//       completed: true
//     }
//   ];
//
//   deepFreeze(stateBefore);
//   deepFreeze(action);
//
//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter);
//
// }
//
//
//
// testAddTodo();

console.log('Tests passed');
