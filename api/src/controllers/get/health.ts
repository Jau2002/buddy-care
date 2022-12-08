// import { NOT_FOUND, OK } from '../protocols';

// function getHealth(_: any, res: any): any {
// 	console.log(getHealth)
// 	try {
// 		return res.status(OK).send({ message: 'the server is running faster' });
// 	} catch (err: any) {
// 		return res.status(NOT_FOUND).send({ message: err.message });
// 	}
// }

// export default getHealth;

import { NOT_FOUND, OK } from '../protocols';
import {Request, Response} from 'express'

const getHealth = async (req: Request, res: Response):Promise<unknown> => {
	console.log(req)
	try {
		return res.status(OK).send({ message: 'the server is running' });
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getHealth;
