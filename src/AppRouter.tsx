import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"
import FavoritePage from "./pages/FavoritePage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Bebidas-React-TS" index element={<HomePage />} />
          <Route path="/Bebidas-React-TS/favoritos" element={<FavoritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter