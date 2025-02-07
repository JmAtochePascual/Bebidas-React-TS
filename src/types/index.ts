import { z } from 'zod';
import { CategoriesShema, CategoryShema, DrinkShema, DrinksShema, PairSchema, RecipeSchema, RecipesSchema, } from '../schemas';

export type TPair = z.infer<typeof PairSchema>;
export type TCategoryShema = z.infer<typeof CategoryShema>;
export type TCategoriesApiResponse = z.infer<typeof CategoriesShema>;
export type TDrinksApiResponse = z.infer<typeof DrinksShema>;
export type TDrinkShema = z.infer<typeof DrinkShema>;
export type TRecipes = z.infer<typeof RecipesSchema>;
export type TRecipe = z.infer<typeof RecipeSchema>;