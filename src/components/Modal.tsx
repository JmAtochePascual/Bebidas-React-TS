import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useAppStore } from '../store/useAppStore'

const Modal = () => {
  const { modal, recipe, closeModal } = useAppStore();
  const { strDrink, strInstructions, strDrinkThumb } = recipe;

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

            <div className="w-full mb-4 overflow-hidden rounded-md">
              <img
                src={strDrinkThumb}
                alt={`Imagen de ${strDrink}`}
                className="w-full" />
            </div>

            <DialogTitle as="h3" className="mb-2 text-center font-bold text-lg text-gray-800">
              {strDrink}
            </DialogTitle>

            <p>
              {strInstructions}
            </p>

          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal