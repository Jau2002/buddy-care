import { Request, Response } from 'express';
import MedicalRecord from '../../models/MedicalRecord';
import { NOT_FOUND, OK } from '../protocols';

async function postMedicalRecord(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	const {
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
		const medicalRecordModified: any | null = await MedicalRecord.findByPk(id);

		medicalRecordModified.id_mascota = id_mascota;
		medicalRecordModified.id_veterinario = id_veterinario;
		medicalRecordModified.nomenclador = nomenclador;
		medicalRecordModified.descripcion = descripcion;
		medicalRecordModified.falta = falta;
		medicalRecordModified.faccion = faccion;
		medicalRecordModified.halta = halta;
		medicalRecordModified.adjuntos = adjuntos;

		await medicalRecordModified.save();

		return res.status(OK).send(medicalRecordModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default postMedicalRecord;
