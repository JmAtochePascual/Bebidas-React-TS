import { z } from 'zod';

export const PairSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const CategoryShema = z.object({
  strCategory: z.string(),
});

export const CategoriesShema = z.object({
  drinks: z.array(CategoryShema)
});

export const DrinkShema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksShema = z.object({
  drinks: z.array(DrinkShema)
});

export const RecipeSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});

export const RecipesSchema = z.object({
  drinks: z.array(RecipeSchema)
});

