import { Request, Response } from 'express';
import MedicalRecord from '../../models/MedicalRecord';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteMedicalRecord(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	try {
		await MedicalRecord.destroy({ where: { id } });
		return res.status(NO_CONTENT).sendStatus(200);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteMedicalRecord;
