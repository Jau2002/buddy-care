import { Router } from 'express';
import postMedicalRecord from '../controllers/create/postMedicalRecord';
import deleteMedicalRecord from '../controllers/Delete/deleteMedicalRecord';
import getAllMedicalRecords from '../controllers/read/getAllMedicalRecords';
import getMedicalRecord from '../controllers/read/getMedicalRecord';

const medicalRecords: Router = Router();

medicalRecords.post('/', postMedicalRecord);

medicalRecords.delete('/:id', deleteMedicalRecord);

medicalRecords.get('/:id', getMedicalRecord);

medicalRecords.get('/', getAllMedicalRecords);

medicalRecords.put('/:id', postMedicalRecord);

export default medicalRecords;
