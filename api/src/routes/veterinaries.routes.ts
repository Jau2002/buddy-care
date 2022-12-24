import { Router } from 'express';
import postVeterinary from '../controllers/create/postVeterinary';
import deleteVeterinary from '../controllers/delete/deleteVeterinary';
import getAllVeterinaries from '../controllers/read/getAllVeterinaries';
import getVeterinary from '../controllers/read/getVeterinary';
import putVeterinary from '../controllers/update/putVeterinary';

const veterinaries: Router = Router();

veterinaries.post('/', postVeterinary);

veterinaries.get('/', getAllVeterinaries);

veterinaries.put('/:id', putVeterinary);

veterinaries.delete('/:id', deleteVeterinary);

veterinaries.get('/:id', getVeterinary);

export default veterinaries;
