import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <input
        value={text}
        placeholder="Write next todo "
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" title="submit">
        Submit
      </Button>
    </form>
  )
}
export default TodoForm
