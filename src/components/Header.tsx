import { NavLink } from "react-router-dom"

const Header = () => {

  return (
    <header className="py-12 bg-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">
        <img
          src="icon/logo.svg"
          alt="logo de bebidas"
          className="w-24" />

        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => `text-lg uppercase font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`}>
            Home
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) => `text-lg uppercase font-semibold ${isActive ? 'text-orange-500' : 'text-white'}`}>
            Favoritos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header