import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"

const Layout = () => {
  return (
    <>
      <Header />

      <main className="w-11/12 max-w-7xl mx-auto">
        <Outlet />
      </main>

      <Modal />
    </>
  )
}

export default Layout