import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../store/useAppStore";
import { useEffect } from "react";

const Header = () => {
  const { categories, fetchCategories } = useAppStore();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <header
      className={`mb-10 py-12 bg-cover bg-center md:py-20 ${isHome ? 'bg-[url(img/bg.jpg)]' : 'bg-slate-800'}`}>
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <img
            src="icon/logo.svg"
            alt="logo de bebidas"
            className="w-24" />

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => `text-lg uppercase font-bold ${isActive ? 'text-orange-500' : 'text-white'}`}>
              Home
            </NavLink>

            <NavLink
              to="/favoritos"
              className={({ isActive }) => `text-lg uppercase font-bold ${isActive ? 'text-orange-500' : 'text-white'}`}>
              Favoritos
            </NavLink>
          </nav>
        </div>

        {
          isHome &&
          <form
            className="w-full p-4 flex flex-col gap-4 rounded-md bg-orange-500 shadow-2xl md:w-1/2 lg:w-1/3">
            <div>
              <label
                htmlFor="ingrediente"
                className="mb-1 block uppercase font-semibold text-white">
                Nombre o Ingrediente
              </label>

              <input
                id="ingrediente"
                name="ingrediente"
                placeholder="Ejm: Margarita"
                type="text"
                className="w-full p-2 rounded-md outline-none" />
            </div>

            <div>
              <label
                htmlFor="categoty"
                className="mb-1 block uppercase font-semibold text-white">
                Ingrediente
              </label>

              <select
                name="categoty"
                id="categoty"
                className="w-full p-2 rounded-md outline-none">
                <option value="">-- Selecciona un ingrediente --</option>
                {
                  categories.map((drink) =>
                    <option
                      key={drink.strCategory}
                      value={drink.strCategory}>
                      {drink.strCategory}
                    </option>
                  )
                }
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Receta"
              className="p-2 text-white uppercase font-bold cursor-pointer bg-orange-800 hover:bg-orange-900" />
          </form>
        }
      </div>
    </header>
  )
}

export default Header