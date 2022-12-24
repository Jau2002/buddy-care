import { Request, Response } from 'express';
import MedicalRecord from '../../models/MedicalRecord';
import { CONFLICT, CREATE } from '../protocols';

async function postMedicalRecord(
	req: Request,
	res: Response
): Promise<Response> {
	const {
		id,
		id_mascota,
		id_veterinario,
		nomenclador,
		descripcion,
		falta,
		faccion,
		halta,
		adjuntos,
	} = req.body;
	try {
		let newMedicalRecord = await MedicalRecord.create({
			id,
			id_mascota,
			id_veterinario,
			nomenclador,
			descripcion,
			falta,
			faccion,
			halta,
			adjuntos,
		});
		return res.status(CREATE).send(newMedicalRecord);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postMedicalRecord;
