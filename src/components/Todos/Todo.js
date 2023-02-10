import styles from './Todo.module.css'

function Todo({ todo }) {
  return (
    <div className={styles.todo}>
      <div>{todo}</div>
    </div>
  )
}
export default Todo
