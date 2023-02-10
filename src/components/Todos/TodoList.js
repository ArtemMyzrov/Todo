import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {!todos.length ? (
        <h2 className={styles.noTodo}>Todo list is empty</h2>
      ) : (
        <div className={styles.todoListContainer}>
          {todos.map((todo, index) => (
            <Todo
              deleteTodo={deleteTodo}
              key={index}
              index={index}
              todo={todo}
            />
          ))}
        </div>
      )}
    </>
  )
}
export default TodoList
