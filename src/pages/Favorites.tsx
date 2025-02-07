import DrinksList from "../components/DrinksList";
import { useAppStore } from "../store/useAppStore"

const Favorites = () => {
  const { favorites } = useAppStore();

  return (
    <section>
      <h1 className="mb-10 text-4xl font-bold text-gray-800 md:text-5xl">Favoritos</h1>

      <DrinksList
        label="Los favoritos se mostrarán aquí"
        list={favorites}
      />
    </section>
  )
}

export default Favorites