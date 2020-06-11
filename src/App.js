import React, { useReducer } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducer/reducer";

function App() 
{
  const [ state, dispatch ] = useReducer( reducer, initialState );
  
  return (
    <div>
      <h2>Todo List: MVP</h2>
      <TodoList todoList = { state.todoList } dispatch = { dispatch } />
      <TodoForm dispatch = { dispatch } />
    </div>
  );
}

export default App;