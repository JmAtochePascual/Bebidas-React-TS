import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, TRecipeSlice } from "./recipeSlice";

export const useAppStore = create<TRecipeSlice>()(
  devtools(
    (...a) => ({
      ...recipeSlice(...a),
    }))
);