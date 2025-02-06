import { StateCreator } from "zustand"
import { getCategories } from "../services/recipeService"
import { TCategoryApiResponse } from "../types"

export type TRecipeSlice = {
  categories: TCategoryApiResponse[],
  fetchCategories: () => Promise<void>
}

export const recipeSlice: StateCreator<TRecipeSlice> = (set, get, api) => ({
  categories: [],
  fetchCategories: async () => {
    const newCtaegories = await getCategories();
    set({ categories: newCtaegories });
  }
});
