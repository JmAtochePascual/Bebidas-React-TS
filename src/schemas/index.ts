import { z } from 'zod';
export const CategoryApiResponse = z.object({
  strCategory: z.string(),
});

export const CategoriesApiSchema = z.object({
  drinks: z.array(CategoryApiResponse)
});
