import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(response) {
    const values = await response.json()
    setTodos(values.todos)
  })

  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos passedtodos={todos}></Todos>
    </div>
  )
}

export default App
