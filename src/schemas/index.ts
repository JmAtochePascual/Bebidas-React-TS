import { z } from 'zod';

export const PairSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const CategoryApiResponse = z.object({
  strCategory: z.string(),
});

export const CategoriesApiSchema = z.object({
  drinks: z.array(CategoryApiResponse)
});

export const DrinkApiResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksApiSchema = z.object({
  drinks: z.array(DrinkApiResponse)
});