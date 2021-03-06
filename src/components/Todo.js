import React from "react";
import "./Todo.css";

export default function( props )
{
  return(
    <div
      onClick = { () => props.dispatch( { type : "TOGGLE", payload : props.todo.id } ) }
      className = { props.todo.completed ? "toggle" : ""  } >
      <p>{ props.todo.task }</p>
    </div>
  )
}