import { Router } from 'express';
import monitored from './monitored.routes';
import Historiaclinica  from '../routes/Historiaclinica.routes';
import Mascotas from './Mascotas.routes';
import Operadores from './Operadores.routes';
import Rubros from './Rubros.routes';
// import Veterinarias from './Veterinarias.routes';
import Veterinarios from './Veterinarios.routes';
import Veterinarias from './Veterinarias.routes';

const routes = Router();

routes.use('/health', monitored);

routes.use('/historiaClinica', Historiaclinica);
routes.use('/mascotas', Mascotas);
routes.use('/operadores', Operadores);
routes.use('/rubros', Rubros);
routes.use('/veterinarias', Veterinarias);
routes.use('/veterinarios', Veterinarios);


export default routes;
