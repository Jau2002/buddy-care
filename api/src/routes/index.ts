import { Router } from 'express';
import articles from './articles.routes';
import categories from './categories.routes';
import commerces from './commerces.routes';
import customers from './customers.routes';
import medicalRecords from './medicalRecords.routes';
import monitored from './monitored.routes';
import operators from './operators.routes';
import pets from './pets.routes';
import query from './query.routes';
import reviews from './reviews.routes';
import schedules from './schedules.routes';
import shoppingBasket from './shoppingBasket.routes';
import veterinaries from './veterinaries.routes';
import vets from './vets.routes';

const rootRoute: Router = Router();

rootRoute.use('/health', monitored);

rootRoute.use('/query', query);

rootRoute.use('/articulos', articles);

rootRoute.use('/carrito', shoppingBasket);

rootRoute.use('/clientes', customers);

rootRoute.use('/commerces', commerces);

rootRoute.use('/historiaClinica', medicalRecords);

rootRoute.use('/horarios', schedules);

rootRoute.use('/mascotas', pets);

rootRoute.use('/operadores', operators);

rootRoute.use('/reviews', reviews);

rootRoute.use('/rubros', categories);

rootRoute.use('/veterinarias', veterinaries);

rootRoute.use('/veterinarios', vets);

export default rootRoute;
