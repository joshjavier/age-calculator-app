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
    <main className="container">
      <h1 className="visually-hidden">Age Calculator</h1>
      <age-calculator>
        <Form setAge={setAge} />
        <Age {...age} />
      </age-calculator>
    </main>
  )
}

export default App
