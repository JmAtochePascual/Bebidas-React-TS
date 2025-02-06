import { z } from 'zod';
import { CategoriesApiSchema, CategoryApiResponse, } from '../schemas';

export type TCategoryApiResponse = z.infer<typeof CategoryApiResponse>;
export type TCategoriesApiResponse = z.infer<typeof CategoriesApiSchema>;