import { z } from 'zod';
import { CategoriesApiSchema, CategoryApiResponse, DrinkApiResponse, DrinksApiSchema, PairSchema, RecipeSchema, RecipesSchema, } from '../schemas';

export type TPair = z.infer<typeof PairSchema>;
export type TCategoryApiResponse = z.infer<typeof CategoryApiResponse>;
export type TCategoriesApiResponse = z.infer<typeof CategoriesApiSchema>;
export type TDrinksApiResponse = z.infer<typeof DrinksApiSchema>;
export type TDrinkApiResponse = z.infer<typeof DrinkApiResponse>;
export type TRecipes = z.infer<typeof RecipesSchema>;
export type TRecipe = z.infer<typeof RecipeSchema>;