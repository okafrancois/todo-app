import {Task} from "../todo-list/TodoList.tsx";
import './todo-item.scss'

type TaskItemProps = {
  task: Task
  onDeleteTask: () => void
  onTaskClick: () => void
}
export default function TodoItem({task, onTaskClick, onDeleteTask}: Readonly<TaskItemProps>) {
  return (
      <li className={"todo-item"}>
        <label>
          <input
              type={"checkbox"}
              checked={task.isDone}
              onChange={() => onTaskClick()}
          />
          <span className={task.isDone ? "todo-done" : ""}>{task.name}</span>
        </label>
        <button onClick={() => onDeleteTask()}>X</button>
      </li>
  )
}