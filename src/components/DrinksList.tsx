import { TDrinkShema } from "../types"
import DrinkCard from "./DrinkCard";

type DrinkCardProps = {
  label: string,
  list: TDrinkShema[]
}

const DrinksList = ({ label, list }: DrinkCardProps) => {
  const drinks = list;
  const isListEmpty = list.length === 0;
  return (
    <>
      {
        isListEmpty
          ? <p className="text-lg text-center text-gray-800">{label}</p>
          : <div className="pb-32 grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              drinks.map(drink =>
                <DrinkCard
                  key={drink.idDrink}
                  drink={drink}
                />
              )
            }
          </div>
      }
    </>
  )
}

export default DrinksList