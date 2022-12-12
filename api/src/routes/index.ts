import { Router } from 'express';
import monitored from './monitored.routes';
import Articulos from './Articulos.routes';
import Carrito from './Carrito.routes';
import Clientes from './Clientes.routes';
import Historiaclinica  from '../routes/Historiaclinica.routes';
import Mascotas from './Mascotas.routes';
import Operadores from './Operadores.routes';
import Rubros from './Rubros.routes';
import Veterinarios from './Veterinarios.routes';
import Veterinarias from './Veterinarias.routes';
import Query from './Query.routes';

const routes = Router();

routes.use('/health', monitored);

routes.use('/articulos', Articulos);
routes.use('/carrito', Carrito);
routes.use('/clientes', Clientes);
routes.use('/historiaClinica', Historiaclinica);
routes.use('/mascotas', Mascotas);
routes.use('/operadores', Operadores);
routes.use('/rubros', Rubros);
routes.use('/veterinarias', Veterinarias);
routes.use('/veterinarios', Veterinarios);
routes.use('/queri', Query);


export default routes;
