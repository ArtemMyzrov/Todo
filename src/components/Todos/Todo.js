import { BiTask } from 'react-icons/bi'
import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <BiTask className={styles.todoIcon} />
      <div>{todo}</div>
    </div>
  )
}
export default Todo
