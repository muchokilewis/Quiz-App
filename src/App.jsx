import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./style.css"
import Header from './components/header'
import Quiz from "./components/quiz"
import MainPage from "./components/mainPage"
import Trials from "./components/trials"

function App() {

  return (
    <div className="main-page">
      <Header />
      {/* <Quiz /> */}
      {/* <MainPage /> */}
      {/* <MainPage />
      <MainPage /> */}
      <Trials />
    </div>
  )
}

export default App
