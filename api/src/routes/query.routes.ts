import { Router } from 'express';
import getByQuery from '../controllers/read/getByQuery';

const query: Router = Router();

query.get('/', getByQuery);

export default query;
