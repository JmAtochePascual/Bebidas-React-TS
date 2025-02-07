import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/recipeService"
import { TCategoryApiResponse, TDrinkApiResponse, TPair } from "../types"

export type TRecipeSlice = {
  categories: TCategoryApiResponse[],
  drinks: TDrinkApiResponse[],
  fetchCategories: () => Promise<void>,
  fetchRecipes: (pair: TPair) => Promise<void>
}

export const recipeSlice: StateCreator<TRecipeSlice> = (set) => ({
  categories: [],
  drinks: [],
  fetchCategories: async () => {
    const newCtaegories = await getCategories();
    set({ categories: newCtaegories });
  },
  fetchRecipes: async (pair) => {
    const newDrinks = await getRecipes(pair);
    set({ drinks: newDrinks });
  }
});
