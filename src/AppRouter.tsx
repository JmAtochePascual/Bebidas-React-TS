import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

const IndexPage = lazy(() => import('./pages/IndexPage'))
const FavoritePage = lazy(() => import('./pages/FavoritePage'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={
            <Suspense fallback={<div>Cargando...</div>}>
              <IndexPage />
            </Suspense>} />

          <Route path="/favoritos" element={
            <Suspense fallback={<div>Cargando...</div>}>
              <FavoritePage />
            </Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter