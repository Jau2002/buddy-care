import { Router } from 'express';
import postPet from '../controllers/create/postPet';
import deletePet from '../controllers/Delete/deletePet';
import getAllPets from '../controllers/read/getAllPets';
import getPet from '../controllers/read/getPet';
import putPet from '../controllers/update/putPet';

const Mascotas: Router = Router();

Mascotas.post('/', postPet);

Mascotas.get('/', getAllPets);

Mascotas.put('/:id', putPet);

Mascotas.delete('/:id', deletePet);

Mascotas.get('/:id', getPet);

export default Mascotas;
