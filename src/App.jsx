import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import MainHeader from './components/MainHeader'
import DefaultLayout from "./layouts/DefaultLayout"
import Homepage from "./pages/Homepage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
