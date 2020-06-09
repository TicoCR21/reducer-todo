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
    props.addTask( task.task );
    setTask( { task : "" } );
  }

  
  return(
    <div>
      <input type = "text" value = { task.task } onChange = { onChange }/>
      <button onClick = { onAdd }>
        Add Todo
      </button>
      <button onClick = { props.clearTasks }>
        Clear Completed
      </button>
    </div>
  );
}