import { Request, Response } from 'express';
import sequelize from '../../config/db';
import { INTERNAL_SERVER_ERROR, OK } from '../protocols';

async function getByQuery(req: Request, res: Response): Promise<Response> {
	const { myQuery } = req.body;
	try {
		const [results] = await sequelize.query(myQuery);

		return res.status(OK).send(results);
	} catch (err) {
		return res
			.status(INTERNAL_SERVER_ERROR)
			.send({ message: (err as Error).message });
	}
}

export default getByQuery;
