import axios from 'axios';
import { CategoriesApiSchema } from '../schemas';

export const getCategories = async () => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

  try {
    const { data } = await axios.get(URL);
    const result = CategoriesApiSchema.safeParse(data);

    if (result.success) {
      return result.data.drinks;
    }
  } catch (error) {
    console.log('Error', error);
  }

}  