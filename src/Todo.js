import React from "react";
import './Todo.css'

export default function Todo({todo, toggleTodo}){
  function handleChangeTodo(){
    toggleTodo(todo.id);
  }
  
  return(
    <label>
      <input type="checkbox" onChange={handleChangeTodo} checked={todo.complete}/>
      <p className={todo.complete ? 'complete' : ''}>{todo.name}</p><br/>
    </label> 
  )
}