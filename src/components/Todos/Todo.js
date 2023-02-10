import { BiTask } from 'react-icons/bi'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(todo.id)} className={styles.todo}>
      <BiTask className={styles.todoIcon} />
      <div>{todo.text}</div>
    </div>
  )
}
export default Todo
