import { StateCreator } from "zustand"
import { getCategories, getDrinks, getRecipe } from "../services/recipeService"
import { TCategoryShema, TDrinkShema, TPair, TRecipe } from "../types"

export type TRecipeSlice = {
  categories: TCategoryShema[],
  drinks: TDrinkShema[],
  recipe: TRecipe,
  modal: boolean,
  fetchCategories: () => Promise<void>,
  fetchDrinks: (pair: TPair) => Promise<void>
  fetchRecipe: (id: TDrinkShema['idDrink']) => Promise<void>
  closeModal: () => void
}

export const recipeSlice: StateCreator<TRecipeSlice> = (set) => ({
  categories: [],
  drinks: [],
  recipe: {} as TRecipe,
  modal: false,
  fetchCategories: async () => {
    const newCtaegories = await getCategories();
    set({ categories: newCtaegories });
  },
  fetchDrinks: async (pair) => {
    const newDrinks = await getDrinks(pair);
    set({ drinks: newDrinks });
  },
  fetchRecipe: async (id) => {
    const newRecipe = await getRecipe(id);
    set({ recipe: newRecipe, modal: true });
  },
  closeModal: () => set({ modal: false, recipe: {} as TRecipe })
});
