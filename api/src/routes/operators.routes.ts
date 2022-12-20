import { Router } from 'express';
import postOperator from '../controllers/create/postOperator';
import deleteOperator from '../controllers/delete/deleteOperator';
import getAllOperators from '../controllers/read/getAllOperators';
import getOperador from '../controllers/read/getOperator';
import putOperator from '../controllers/update/putOperator';

const operators: Router = Router();

operators.post('/', postOperator);

operators.get('/', getAllOperators);

operators.put('/:id', putOperator);

operators.delete('/:id', deleteOperator);

operators.get('/:id', getOperador);

export default operators;
