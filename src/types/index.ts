import { z } from 'zod';
import { CategoriesApiSchema, CategoryApiResponse, PairSchema, } from '../schemas';

export type TPair = z.infer<typeof PairSchema>;
export type TCategoryApiResponse = z.infer<typeof CategoryApiResponse>;
export type TCategoriesApiResponse = z.infer<typeof CategoriesApiSchema>;