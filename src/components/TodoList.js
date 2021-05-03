import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []

  const [todos, setTodos] = useState(initialState)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  function expand() {
    setIsExpanded(true)
  }

  const removeTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))

  const CompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      }),
    )
  }
  const CompleteAll = () => {
    setTodos(
      todos.map((todo) => {
        todo.isComplete = true
        return todo
      }),
    )
  }
  const newTodosComplete = () => {
    return todos.filter((todo) => todo.isComplete === false)
  }

  return (
    <div>
      {!isExpanded && (
        <button onClick={expand} className="todo-button">
          Add Task
        </button>
      )}
      {isExpanded && <TodoForm onSubmit={addTodo} />}
      <Todo todos={todos} completeTodo={CompleteTodo} removeTodo={removeTodo} />
      <div>
        <p className="todo-more-left">
          You have {newTodosComplete().length} to do
        </p>
        <button className="todo-button-completeAll" onClick={CompleteAll}>
          check everything, I need a beer
        </button>
      </div>
    </div>
  )
}

export default TodoList
