import { Request, Response } from 'express';
import Schedule from '../../models/Schedule';
import { NOT_FOUND, OK } from '../protocols';

async function putSchedule(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { id_veterinario, fechaguardia, descripcion, falta, halta } = req.body;
	try {
		const scheduleModified: any | null = await Schedule.findByPk(id);

		scheduleModified.id = id;
		scheduleModified.id_veterinario = id_veterinario;
		scheduleModified.fechaguardia = fechaguardia;
		scheduleModified.descripcion = descripcion;
		scheduleModified.falta = falta;
		scheduleModified.halta = halta;

		await scheduleModified.save();

		return res.status(OK).send(scheduleModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putSchedule;
