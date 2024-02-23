import './todo-list.scss'
import TodoItem from "../todo-item/TodoItem.tsx";
import {useState} from "react";
import AddTodo from "../add-todo/AddTodo.tsx";


export type Task = {
  id: string
  name: string
  isDone: boolean,
  createdAt: Date
}

export default function TodoList() {
  const [todos, setTodos] = useState<Task[]>([])

  function handleAddTask(name: string) {
    const newTask = {
      id: crypto.randomUUID(),
      name,
      isDone: false,
      createdAt: new Date()
    }

    setTodos([newTask, ...todos])
  }

  function handleDeleteTask(id: string) {
    setTodos(todos.filter(task => task.id !== id))
  }

  function handleTaskToggle(id: string) {
    setTodos(todos.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task
    }))
  }

  return (
      <div className={"todolist-container"}>
        <h1>Todo List</h1>

        <AddTodo onNewTask={handleAddTask}/>

        <ul className={"task-list"}>
          {todos.map((task) => (
              <TodoItem
                  key={task.id}
                  task={task}
                  onDeleteTask={() => handleDeleteTask(task.id)}
                  onTaskClick={() => handleTaskToggle(task.id)}
              />
          ))}
        </ul>
      </div>
  )
}