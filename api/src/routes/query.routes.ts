import { Router } from 'express';
import getByQuery from '../controllers/read/getByQuery';

const query: Router = Router();

query.post('/', getByQuery);

export default query;
