import { Router } from 'express';
import postCustomer from '../controllers/create/postCustomer';
import deleteCustomer from '../controllers/Delete/deleteCustomer';
import getAllCustomers from '../controllers/read/getAllCustomers';
import getCustomer from '../controllers/read/getCustomer';
import putCostumer from '../controllers/update/putCustomer';

const customers: Router = Router();

customers.post('/', postCustomer);

customers.delete('/:id', deleteCustomer);

customers.put('/:id', putCostumer);

customers.get('/:id', getCustomer);

customers.get('/', getAllCustomers);

export default customers;
