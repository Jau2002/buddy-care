import { Router } from 'express';
import postSchedule from '../controllers/create/postSchedule';
import deleteSchedule from '../controllers/delete/deleteSchedule';
import getAllSchedule from '../controllers/read/getAllSchedules';
import getSchedule from '../controllers/read/getSchedule';
import putSchedule from '../controllers/update/putSchedule';

const schedules: Router = Router();

schedules.post('/', postSchedule);

schedules.get('/', getAllSchedule);

schedules.put('/:id', putSchedule);

schedules.delete('/:id', deleteSchedule);

schedules.get('/:id', getSchedule);

export default schedules;
