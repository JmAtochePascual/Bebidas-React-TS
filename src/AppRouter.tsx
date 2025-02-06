import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"
import Favorites from "./layouts/Favorites"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter