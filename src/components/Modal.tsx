import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useAppStore } from '../store/useAppStore'

const Modal = () => {
  const { modal, recipe, closeModal } = useAppStore();
  const { strDrink, strInstructions, strDrinkThumb } = recipe;

  const rederIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof typeof recipe];
      const measure = recipe[`strMeasure${i}` as keyof typeof recipe];

      if (ingredient) {
        ingredients.push(
          <li key={i} className="flex items-center justify-between">
            <span className="text-gray-800">{ingredient}</span>
            <span className="text-gray-600">{measure}</span>
          </li>
        )
      }
    }

    return ingredients;
  }

  return (
    <Dialog
      open={modal}
      as="div"
      onClose={() => closeModal()}
      className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-75">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <DialogTitle as="h3" className="mb-2 text-center font-bold text-lg text-gray-800 md:text-2xl">
              {strDrink}
            </DialogTitle>

            <div className="w-full mb-4 overflow-hidden rounded-md">
              <img
                src={strDrinkThumb}
                alt={`Imagen de ${strDrink}`}
                className="w-full max-w-80 mx-auto rounded-md" />
            </div>
            <DialogTitle as="h3" className="mb-2 font-bold text-lg text-gray-800 md:text-2xl">
              Instrucciones
            </DialogTitle>

            <p>
              {strInstructions}
            </p>

            <DialogTitle as="h3" className="mb-2 font-bold text-lg text-gray-800 md:text-2xl">
              Ingredientes
            </DialogTitle>

            <ul className="grid gap-2">
              {rederIngredients()}
            </ul>

          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal