import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import DefaultLayout from "./layouts/DefaultLayout"
import Homepage from "./pages/Homepage"
import MovieDetailPage from "./pages/MovieDetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="movies/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
