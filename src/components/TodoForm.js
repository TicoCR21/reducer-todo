import React, { useState } from "react";

export default function( props )
{

  const [ task, setTask ] = useState( { task : "" } );

  const onChange = e =>
  {
    setTask( { task : e.target.value } );
  }

  const onAdd = e =>
  {
    e.preventDefault();
    props.dispatch( { type : "ADD", payload : task.task } );
    setTask( { task : "" } );
  }

  
  return(
    <div>
      <input type = "text" value = { task.task } onChange = { onChange }/>
      <button onClick = { onAdd }>
        Add Todo
      </button>
      <button onClick = { e => { e.preventDefault(); props.dispatch( { type : "CLEAR" } ) } }>
        Clear Completed
      </button>
    </div>
  );
}