import { useState } from 'react'
import './App.css'
import ViewFlights from './components/ViewFlights'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewFlights/>
    </>
  )
}

export default App
