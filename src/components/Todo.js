import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

function Todo(props) {
  return props.todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <DeleteIcon
          onClick={() => props.removeTodo(todo.id)}
          className="delelt-icon"
        />
      </div>
    </div>
  ))
}

export default Todo
