import { Router } from 'express';
import postItemShoppingBasket from '../controllers/create/postItemShoppingBasket';
import deleteItemShoppingBasket from '../controllers/Delete/deleteItemShoppingBasket';
import getAllItemsShoppingBasket from '../controllers/read/getAllItemsShoppingBasket';
import getItemShoppingBasket from '../controllers/read/getItemShoppingBasket';
import putItemShoppingBasket from '../controllers/update/putItemShoppingBasket';

const shoppingBasket: Router = Router();

shoppingBasket.post('/', postItemShoppingBasket);

shoppingBasket.delete('/:id', deleteItemShoppingBasket);

shoppingBasket.get('/:id', getItemShoppingBasket);

shoppingBasket.get('/', getAllItemsShoppingBasket);

shoppingBasket.put('/:id', putItemShoppingBasket);

export default shoppingBasket;
