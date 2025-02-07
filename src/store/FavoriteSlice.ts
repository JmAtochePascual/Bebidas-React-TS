import { StateCreator } from "zustand"
import { TRecipe } from '../types/index';


export type TFavoriteSlice = {
  favorites: TRecipe[],
  alreadyExists: (recipe: TRecipe['idDrink']) => boolean,
  addFavorite: (recipe: TRecipe) => void,
}

export const favoriteSlice: StateCreator<TFavoriteSlice> = (set, get) => ({
  favorites: [],
  alreadyExists: (id) => get().favorites.some((fav) => fav.idDrink === id),
  addFavorite: (recipe) => {
    const addToFavorites = () => set((state) => ({ favorites: [...state.favorites, recipe], }));
    const deleteFromFavorites = () => set((state) => ({ favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink) }));

    if (get().alreadyExists(recipe.idDrink)) {
      deleteFromFavorites();
    } else {
      addToFavorites();
    }
  }

})