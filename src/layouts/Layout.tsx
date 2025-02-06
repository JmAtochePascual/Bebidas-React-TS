import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () => {
  return (
    <>
      <Header />

      <main className="w-11/12 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  )
}

export default Layout