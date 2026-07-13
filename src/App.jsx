import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ViewFlights from './components/ViewFlights'
import AddFlight from './components/AddFlight'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewFlights/>
      <AddFlight />
      <Home />
      <NavigationBar />
    </>
  )
}

export default App
