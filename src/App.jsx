import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./style.css"
import Header from './components/header'
import Quiz from "./components/quiz"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Quiz />
    </div>
  )
}

export default App
