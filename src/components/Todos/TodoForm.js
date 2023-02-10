import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <input
        value={text}
        placeholder="Write next todo "
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className={styles.buttonSubmit}>
        Submit
      </button>
    </form>
  )
}
export default TodoForm
