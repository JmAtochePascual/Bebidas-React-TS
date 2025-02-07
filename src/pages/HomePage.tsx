import DrinksList from "../components/DrinksList";
import { useAppStore } from "../store/useAppStore"

const HomePage = () => {
  const { drinks } = useAppStore();

  return (
    <section>
      <h1 className="mb-10 text-4xl font-bold text-gray-800 md:text-5xl">Recetas</h1>

      <DrinksList
        label="Comienza realizando una búsqueda"
        list={drinks}
      />
    </section>
  )
}

export default HomePage