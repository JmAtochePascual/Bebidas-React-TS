import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
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

      <footer className='absolute bottom-0 w-full py-1 bg-orange-500'>
        <p className="p-4 text-center md:text-start text-white"> <span className="font-bold">JMCode</span> | ©2025 - Transformando ideas en realidad.</p>
      </footer>

      <ToastContainer />
    </>
  )
}

export default Layout