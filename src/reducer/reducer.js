
const initialState = 
{ 
  todoList : 
             [ 
                { task : "Play League of Legends", id : Date.now(), completed : false } 
             ] 
}; 

const reducer = ( state, action ) =>
{
  switch( action.type )
  {
    case "ADD":
      return { todoList : [ ...state.todoList,  {  task : action.payload, id : Date.now(), completed : false } ] };

    case "TOGGLE":
      return { 
        todoList : state.todoList.map( todo =>
        {
          if( action.payload === todo.id )
            return { ...todo, completed : !todo.completed };
          else
            return todo;
        } ) };

    case "CLEAR":
        return { todoList : state.todoList.filter( task => !task.completed ) };
    
    default:
      return state;
  }
};

export { initialState, reducer };