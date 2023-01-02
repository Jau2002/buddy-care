import type { Query, Submit } from './utils';

function prevSubmit({ email, password, id }: Submit, path: string): Query {
	let query: Query = {};

	if (path === '/signIn/') {
		query = {
			myQuery: `SELECT email, password, apellido, nombres, id FROM pfvet_clientes WHERE TRIM(email)='${email?.trim()}' AND TRIM(password)='${password?.trim()}' LIMIT 1;`,
		};
	}
	console.log(path);
	if (path === '/pets') {
		query = {
			myQuery: `SELECT pfvet_mascotas.*, pfvet_adjuntos.* FROM pfvet_mascotas INNER JOIN pfvet_adjuntos ON pfvet_mascotas.id=pfvet_adjuntos.id_originador WHERE pfvet_mascotas.id_cliente=${id} AND TRIM(originador)='MASCOTA';`,
		};
	}
	return query;
}

export default prevSubmit;
