import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddFlight from './components/AddFlight'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddFlight />
      <Home />
      <NavigationBar />
    </>
  )
}

export default App
