import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { recipeSlice, TRecipeSlice } from "./recipeSlice";
import { favoriteSlice, TFavoriteSlice } from "./FavoriteSlice";

export type TAppStoreType = TRecipeSlice & TFavoriteSlice;

export const useAppStore = create<TAppStoreType>()(
  devtools(
    (...a) => ({
      ...recipeSlice(...a),
      ...favoriteSlice(...a),
    }))
);