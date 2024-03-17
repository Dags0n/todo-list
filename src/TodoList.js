import React from "react";
import './TodoList.css'
import Todo from "./Todo";

export default function TodoList({todoList, toggleTodo}){
  return(
    <div>
      { todoList.map(todo => 
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
      ) }
    </div>
  );
}