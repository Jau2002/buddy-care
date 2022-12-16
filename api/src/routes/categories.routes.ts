import { Router } from 'express';
import postCategory from '../controllers/create/postCategory';
import deleteCategory from '../controllers/Delete/deleteCategory';
import getAllCategories from '../controllers/read/getAllCategories';
import getCategory from '../controllers/read/getCategory';
import putCategory from '../controllers/update/putCategory';

const categories: Router = Router();

categories.post('/', postCategory);

categories.get('/', getAllCategories);

categories.put('/:id', putCategory);

categories.delete('/:id', deleteCategory);

categories.get('/:id', getCategory);

export default categories;
