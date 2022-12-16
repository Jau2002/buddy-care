import { Request, Response } from 'express';
import Schedule from '../../models/Schedule';
import { NOT_FOUND, OK } from '../protocols';

async function getAllSchedule(_: Request, res: Response): Promise<Response> {
	try {
		const totalSchedule = await Schedule.findAll({
			attributes: [
				'id',
				'id_veterinario',
				'fechaguardia',
				'descripcion',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalSchedule);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllSchedule;
