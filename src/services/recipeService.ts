import axios from 'axios';
import { CategoriesApiSchema, DrinksApiSchema, RecipesSchema } from '../schemas';
import { TPair } from '../types';

export const getCategories = async () => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

  try {
    const { data } = await axios.get(URL);
    const result = CategoriesApiSchema.safeParse(data);

    if (result.success) return result.data.drinks;

  } catch (error) {
    console.log('Error', error);
  }
}

export const getDrinks = async (pair: TPair) => {
  const { category, ingredient } = pair;
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}`;

  try {
    const { data } = await axios.get(URL);
    const result = DrinksApiSchema.safeParse(data);

    if (result.success) return result.data.drinks;

  } catch (error) {
    console.log('Error', error);
  }
};

export const getRecipe = async (id: string) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const { data } = await axios.get(URL);
    const result = RecipesSchema.safeParse(data);

    if (result.success) return result.data.drinks[0];

  } catch (error) {
    console.log('Error', error);
  }
}