import { Router } from 'express';
import health from '../controllers/get/health';

const monitoredRoute = Router();

monitoredRoute.get('/', health);

export default monitoredRoute;
