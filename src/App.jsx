import { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import AddFlight from './components/AddFlight'
import ViewFlights from './components/ViewFlights'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFlight />} />
          <Route path="/view" element={<ViewFlights />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App