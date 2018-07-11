import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import logo from './logo.svg';
import './App.css';

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
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;

  }
};

const combineReducers = require('redux').combineReducers;

const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const store = createStore(todoApp);


let nextStateId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch(
            {
              type: 'ADD_TODO',
              text: 'Test',
              id: nextStateId++
            }
          );
        }
      }>
      Add Todo
      </button>
      <ul>
      {this.props.todos.map(todo =>
        <li key={todo.id}>
          {todo.text}
        </li>
      )}
      </ul>
      </div>
    );
  }
}




const render = () => {
  ReactDOM.render(
    <TodoApp
    todos={store.getState().todos}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

registerServiceWorker();
