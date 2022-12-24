import { Request, Response } from 'express';
import Schedule from '../../models/Schedule';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteSchedule(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Schedule.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteSchedule;
