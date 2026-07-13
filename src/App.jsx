import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
<<<<<<< HEAD
=======
import NavigationBar from './components/NavigationBar'
>>>>>>> 8e02a62bf7267db5fecc863ee382680b8e38ea1e

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <NavigationBar />
    </>
  )
}

export default App
