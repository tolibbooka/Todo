import React from 'react';
import './App.css';
import { TodolistForm } from './components/TodolistForm';
import { Todolist } from './components/Todolist';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (text) => {
    let id = 1
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };


  const removeTodo = (id) => {
    let updateTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };
  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id ){
        todo.completed = !todo.completed
      }
      return todo
    })


    setTodos(updateTodos)
  };
  const importantTodo =(id) =>{
    let updateTodos = todos.map((todo) => {
      if (todo.id === id ){
        todo.important = !todo.important
      }
      return todo
    })


    setTodos(updateTodos)
  }
  let sortedTodos = todos.sort((a,b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodolistForm addTodo={addTodo}/>
      <hr classNames='seperator'/>
      {sortedTodos.map((todo) =>{
        return(
          <Todolist removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo}  key={todo.id}/>
          )
      })}
    </div>
  );
}

export default App;
