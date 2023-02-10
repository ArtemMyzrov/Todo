import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {!todos.length ? (
        <h2 className={styles.noTodo}>Todo list is empty</h2>
      ) : (
        <div className={styles.todoListContainer}>
          {todos.map((todo) => (
            <Todo deleteTodo={deleteTodo} key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </>
  )
}
export default TodoList
