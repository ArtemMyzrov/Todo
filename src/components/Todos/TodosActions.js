import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <>
      <Button title="Clear Completed Todos" onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
    </>
  )
}
export default TodosActions
