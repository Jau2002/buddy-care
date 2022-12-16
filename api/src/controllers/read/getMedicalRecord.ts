import { Request, Response } from 'express';
import MedicalRecord from '../../models/MedicalRecord';
import { NOT_FOUND, OK } from '../protocols';

async function getMedicalRecord(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	try {
		const medicalRecord = await MedicalRecord.findOne({ where: { id } });
		return res.status(OK).send(medicalRecord);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getMedicalRecord;
