import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../store/useAppStore"

const Favorites = () => {
  const { favorites } = useAppStore();
  const isFavoritesEmpty = favorites.length === 0;

  return (
    <section>
      <h1 className="mb-10 text-4xl font-bold text-gray-800 md:text-5xl">Favoritos</h1>

      {
        isFavoritesEmpty
          ? <p className="text-lg text-center text-gray-800">No hay recetas, Inicia realizando una búsqueda</p>
          : <div className="grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              favorites.map(drink =>
                <DrinkCard
                  key={drink.idDrink}
                  drink={drink}
                />
              )
            }
          </div>
      }
    </section>
  )
}

export default Favorites