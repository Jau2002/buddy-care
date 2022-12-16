import { Request, Response } from 'express';
import MedicalRecord from '../../models/MedicalRecord';
import { NOT_FOUND, OK } from '../protocols';

async function getAllMedicalRecords(
	_: Request,
	res: Response
): Promise<Response> {
	try {
		const totalMedicalRecords = await MedicalRecord.findAll({
			attributes: [
				'id',
				'id_mascota',
				'id_veterinario',
				'nomenclador',
				'descripcion',
				'falta',
				'faccion',
				'halta',
				'adjuntos',
			],
		});
		return res.status(OK).send(totalMedicalRecords);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllMedicalRecords;
