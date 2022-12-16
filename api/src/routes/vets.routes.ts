import { Router } from 'express';
import postVet from '../controllers/create/postVet';
import deleteVet from '../controllers/Delete/deleteVet';
import getAllVets from '../controllers/read/getAllVets';
import getVet from '../controllers/read/getVet';
import putVet from '../controllers/update/putVet';

const vets: Router = Router();

vets.post('/', postVet);

vets.get('/', getAllVets);

vets.put('/:id', putVet);

vets.delete('/:id', deleteVet);

vets.get('/:id', getVet);

export default vets;
