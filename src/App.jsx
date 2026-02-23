//impoprtiamo le pages
import Homepage from "./pages/Homepage"
import MoviePage from "./pages/MoviePage"
//importiamo il layout
import DefaultLayout from "./layouts/DefaultLayout"
//importiamo libreria rotte
import { Route, BrowserRouter, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
