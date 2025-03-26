import { useState } from 'react'
import './App.css'
import TaskHome from './components/tasklist/TaskHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <TaskHome />
    </div>
  )
}

export default App
