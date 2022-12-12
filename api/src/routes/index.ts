import { Router } from 'express';
import monitored from './monitored.routes';
import Historiaclinica  from '../routes/Historiaclinica.routes';
import Mascotas from './Mascotas.routes';
import Operadores from './Operadores.routes';
import Rubros from './Rubros.routes';
import Articulos from './Articulos.routes';
import Veterinarios from './Veterinarios.routes';
import Veterinarias from './Veterinarias.routes';
import Clientes from './Clientes.routes';
import Carrito from './Carrito.routes';

const routes = Router();

routes.use('/health', monitored);

routes.use('/articulos', Articulos);
routes.use('/clientes', Clientes);
routes.use('/carrito', Carrito);
routes.use('/historiaClinica', Historiaclinica);
routes.use('/mascotas', Mascotas);
routes.use('/operadores', Operadores);
routes.use('/rubros', Rubros);
routes.use('/veterinarias', Veterinarias);
routes.use('/veterinarios', Veterinarios);


export default routes;
