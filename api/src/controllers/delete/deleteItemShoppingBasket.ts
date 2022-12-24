import { Request, Response } from 'express';
import ShoppingBasket from '../../models/ShoppingBasket';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteItemShoppingBasket(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	try {
		await ShoppingBasket.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteItemShoppingBasket;
