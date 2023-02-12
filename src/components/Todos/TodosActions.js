import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from '../Todos/TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
    </div>
  )
}
export default TodosActions
