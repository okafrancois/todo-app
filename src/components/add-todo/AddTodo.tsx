import React from "react";
import './add-todo.scss'

type AddTodoProps = {
  onNewTask: (name: string) => void
}
export default function AddTodo({onNewTask}: Readonly<AddTodoProps>) {
  const inputRef = React.createRef<HTMLInputElement>()

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputRef.current) {
        addTodo(inputRef.current.value)
        inputRef.current.value = ''
      }
    }
  }

  const addTodo = (name: string) => {
    onNewTask(name)
  }

  return (
      <div className="add-todo">
        <input
            onKeyDown={handleEnter}
            ref={inputRef}
            type="text"
            placeholder="Add a new todo"
        />
        <button type={"button"} onClick={() => {
          if (inputRef.current) {
            addTodo(inputRef.current.value)
            inputRef.current.value = ''
          }
        }}>
          Add
        </button>
      </div>
  )
}