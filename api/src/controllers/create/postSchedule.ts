import { Request, Response } from 'express';
import Schedule from '../../models/Schedule';
import { CONFLICT, CREATE } from '../protocols';

async function postSchedule(req: Request, res: Response): Promise<Response> {
	const { id, id_veterinario, fechaguardia, descripcion, falta, halta } =
		req.body;
	try {
		const newSchedule = await Schedule.create({
			id,
			id_veterinario,
			fechaguardia,
			descripcion,
			falta,
			halta,
		});
		return res.status(CREATE).send(newSchedule);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postSchedule;
