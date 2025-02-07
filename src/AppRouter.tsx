import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"

const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/favoritos" element={<Suspense
            fallback={<div>Cargando...</div>}>
            <FavoritesPage />
          </Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter