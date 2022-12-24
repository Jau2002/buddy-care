import { Router } from 'express';
import health from '../controllers/read/getHealth';

const monitoredRoute: Router = Router();

monitoredRoute.get('/', health);

export default monitoredRoute;
