import { Router } from 'express';
import monitored from './monitored.routes';

const routes = Router();

routes.use('/health', monitored);

export default routes;
