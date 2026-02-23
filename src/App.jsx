import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import MainHeader from './components/MainHeader'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>
    </>
  )
}

export default App
