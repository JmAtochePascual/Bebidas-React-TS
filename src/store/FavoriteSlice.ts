import { StateCreator } from "zustand"
import { TRecipe } from '../types/index';
import { useAppStore } from "./useAppStore";
import { toast } from 'react-toastify';

export type TFavoriteSlice = {
  favorites: TRecipe[],
  alreadyExists: (recipe: TRecipe['idDrink']) => boolean,
  handleFavorite: (recipe: TRecipe) => void,
}

export const favoriteSlice: StateCreator<TFavoriteSlice> = (set, get) => ({
  favorites: JSON.parse(localStorage.getItem('favorites-drinks') || '[]'),
  alreadyExists: (id) => get().favorites.some((fav) => fav.idDrink === id),
  handleFavorite: (recipe) => {
    const addToFavorites = () => set((state) => ({ favorites: [...state.favorites, recipe], }));
    const deleteFromFavorites = () => set((state) => ({ favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink) }));

    if (get().alreadyExists(recipe.idDrink)) {
      deleteFromFavorites();
      toast.error('Eliminado de favoritos');
    } else {
      addToFavorites();
      toast.success('Agregado a favoritos');
    }
    useAppStore.getState().closeModal();

    // Add to local storage
    localStorage.setItem('favorites-drinks', JSON.stringify(get().favorites));
  }
})