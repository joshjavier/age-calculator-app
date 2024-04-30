import Age from './components/Age'
import Form from './components/Form'
import './App.css'
import { useState } from 'react'

function App() {
  const [age, setAge] = useState({
    years: null,
    months: null,
    days: null,
  })

  return (
    <div className="container">
      <Form setAge={setAge} />
      <Age {...age} />
    </div>
  )
}

export default App
