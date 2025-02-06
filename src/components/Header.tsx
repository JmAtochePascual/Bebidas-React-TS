import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../store/useAppStore";
import { ChangeEvent, useEffect, useState } from "react";
import { INITIAL_PAIR } from "../data/initialStates";
import { TPair } from "../types";

const Header = () => {
  const { categories, fetchCategories } = useAppStore();
  const [pair, setPair] = useState<TPair>(INITIAL_PAIR);
  const isPairEmpty = Object.values(pair).includes('');
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPair({ ...pair, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(pair);
  }

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
            onSubmit={handleSubmit}
            className="w-full p-4 flex flex-col gap-4 rounded-md bg-orange-500 shadow-2xl md:w-1/2 lg:w-1/3">
            <div>
              <label
                htmlFor="ingredient"
                className="mb-1 block uppercase font-semibold text-white">
                Nombre o Ingrediente
              </label>

              <input
                id="ingredient"
                name="ingredient"
                placeholder="Ejm: Margarita"
                type="text"
                value={pair.ingredient}
                onChange={handleChange}
                className="w-full p-2 rounded-md outline-none" />
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-1 block uppercase font-semibold text-white">
                Ingrediente
              </label>

              <select
                name="category"
                id="category"
                value={pair.category}
                onChange={handleChange}
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
              disabled={isPairEmpty}
              className="p-2 text-white uppercase font-bold cursor-pointer bg-orange-800 hover:bg-orange-900 disabled:opacity-35 disabled:cursor-not-allowed" />
          </form>
        }
      </div>
    </header>
  )
}

export default Header