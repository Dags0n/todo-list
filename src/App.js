import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY_TODOLIST = 'todoList';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOLIST)));
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOLIST, JSON.stringify(todoList));
  }, [todoList])

  const handleAddTodo = () => {
    setTodoList([...todoList, {id: uuidv4(), name: name, complete: false}]);
    setName('');    
  }

  function toggleTodo(id){
    const newTodoList = [...todoList];
    const todo = newTodoList.find(x => x.id === id);
    todo.complete = !todo.complete;

    setTodoList(newTodoList)
  }

  const handleChangeName = (event) => setName(event.target.value);

  const handleClean = () => {
    const todoNotComplete = todoList.filter(x => !x.complete);
    setTodoList(todoNotComplete);
  }

  return (
    <div className='container'>
      <div className='controls'>
        <input value={name} type='text' onChange={handleChangeName}/>
        <button onClick={handleAddTodo}>Add ToDo</button>
        <button onClick={handleClean} className='clear-btn'>Limpar</button>
      </div>
      <div className='todo-list-container'>
        <TodoList todoList={todoList} toggleTodo={toggleTodo}/>
      </div>
      <p>{todoList.filter(x => x.complete).length} Tarefa(s) Concluídas</p><br/>
      <p>{todoList.filter(x => !x.complete).length} Tarefa(s) Não Concluídas</p>
    </div>
  );
}

export default App;
