import React from 'react';
import {Provider} from 'react-redux'
import {store} from './redux'
import './App.css';

import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {
  return (
    <Provider store={store}>
      <div className="main">
      <TodoInput />
      <TodoList />
    </div>
    </Provider>
  );
}

export default App;
