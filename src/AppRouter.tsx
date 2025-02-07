import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"
const FavoritePage = lazy(() => import('./pages/FavoritePage'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Bebidas-React-TS" index element={<HomePage />} />
          <Route path="/Bebidas-React-TS/favoritos" element={
            <Suspense fallback={<div>Loading...</div>}>
              <FavoritePage />
            </Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter