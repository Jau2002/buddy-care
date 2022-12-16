import { Request, Response } from 'express';
import Schedule from '../../models/Schedule';
import { NOT_FOUND, OK } from '../protocols';

async function getSchedule(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const schedule = await Schedule.findOne({ where: { id } });
		return res.status(OK).send(schedule);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getSchedule;
