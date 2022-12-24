import { Request, Response } from 'express';
import ShoppingBasket from '../../models/ShoppingBasket';
import { NOT_FOUND, OK } from '../protocols';

async function getItemShoppingBasket(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	try {
		const item = await ShoppingBasket.findOne({ where: { id } });
		return res.status(OK).send(item);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getItemShoppingBasket;
