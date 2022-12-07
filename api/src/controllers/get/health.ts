import { NOT_FOUND, OK } from '../protocols';

function getHealth(_: any, res: any): any {
	try {
		return res.status(OK).send({ message: 'the server is running' });
	} catch (err: any) {
		return res.status(NOT_FOUND).send({ message: err.message });
	}
}

export default getHealth;
