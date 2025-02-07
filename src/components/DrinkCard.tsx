import { useAppStore } from "../store/useAppStore";
import { TDrinkShema } from "../types"

type TDrinkCardProps = {
  drink: TDrinkShema;
}

const DrinkCard = ({ drink }: TDrinkCardProps) => {
  const { fetchRecipe } = useAppStore();
  const { strDrink, strDrinkThumb } = drink;

  return (
    <div className="w-full max-w-96 p-4 bg-white shadow-md rounded-md md:max-w-none">
      <div className="w-full mb-2 overflow-hidden">
        <img
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
          className="w-full transition  hover:scale-125 hover:rotate-2 transform duration-300 ease-in-out" />
      </div>
      <p className="max-w-60 mb-2 text-lg font-black text-gray-800 truncate">
        {strDrink}
      </p>

      <button
        onClick={() => fetchRecipe(drink.idDrink)}
        className="w-full px-4 py-2 font-bold uppercase cursor-pointer bg-orange-500 text-white hover:bg-orange-600">
        ver receta
      </button>
    </div>
  )
}

export default DrinkCard