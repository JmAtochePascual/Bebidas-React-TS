import { StateCreator } from "zustand"
import { TRecipe } from '../types/index';
import { useAppStore } from "./useAppStore";

export type TFavoriteSlice = {
  favorites: TRecipe[],
  alreadyExists: (recipe: TRecipe['idDrink']) => boolean,
  handleFavorite: (recipe: TRecipe) => void,
}

export const favoriteSlice: StateCreator<TFavoriteSlice> = (set, get) => ({
  favorites: [],
  alreadyExists: (id) => get().favorites.some((fav) => fav.idDrink === id),
  handleFavorite: (recipe) => {
    const addToFavorites = () => set((state) => ({ favorites: [...state.favorites, recipe], }));
    const deleteFromFavorites = () => set((state) => ({ favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink) }));

    if (get().alreadyExists(recipe.idDrink)) {
      deleteFromFavorites();
    } else {
      addToFavorites();
    }
    useAppStore.getState().closeModal();
  }

})