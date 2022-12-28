import type { Type } from '../components/components';
import type { Query } from './utils';

function prevSubmit({ email, password }: Type): Query {
	const query: Query = {
		myQuery: `SELECT email, password, apellido, nombres, id FROM pfvet_clientes WHERE TRIM(email)='${email?.trim()}' AND TRIM(password)='${password?.trim()}' LIMIT 1;`,
	};
	return query;
}

export default prevSubmit;
