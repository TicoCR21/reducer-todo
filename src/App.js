import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() 
{
  const [ todoList, setTodoList ] = useState( 
    
    { 
      todoList : [ 
                    { task : "Play League of Legends", id : Date.now(), completed : false } 
                 ] 
    } 

  ); 
 
  const addTask = task =>
  {
    setTodoList( { todoList : [ ...todoList.todoList,  { task, id : Date.now(), completed : false } ] } );
      // [ ...todoList, { task, id : Date.now(), completed : false } ] } );
  }

  const toggle = id => 
  {
    setTodoList( { todoList : todoList.todoList.map( todo =>
      {
        if( id === todo.id )
          return { ...todo, completed : !todo.completed };
        else
          return todo;
      } ) } );
  }

  const clearTasks = e =>
  {
    e.preventDefault();
    setTodoList( { todoList : todoList.todoList.filter( task => !task.completed ) } );
  }
  
  return (
    <div>
      <h2>Todo List: MVP</h2>
      <TodoList todoList = { todoList.todoList } toggle = { toggle } />
      <TodoForm addTask = { addTask } clearTasks = { clearTasks } />
    </div>
  );
}

export default App;
