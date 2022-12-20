import { Router } from 'express';
import postCommerce from '../controllers/create/postCommerce';
import deleteCommerce from '../controllers/delete/deleteCommerce';
import getAllCommerces from '../controllers/read/getAllCommerces';
import getCommerce from '../controllers/read/getCommerce';
import putCommerce from '../controllers/update/putCommerce';

const Commerces: Router = Router();

Commerces.post('/', postCommerce);

Commerces.delete('/:id', deleteCommerce);

Commerces.get('/:id', getCommerce);

Commerces.get('/', getAllCommerces);

Commerces.put('/:id', putCommerce);

export default Commerces;
