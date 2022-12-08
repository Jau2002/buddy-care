import { Sequelize } from 'sequelize';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, NODE_ENV } = process.env;

const sequelize =
	NODE_ENV === 'production'
		? new Sequelize({
				database: DB_NAME ?? 'db',
				dialect: 'postgres',
				host: DB_HOST ?? 'localhost',
				port: 5432,
				username: DB_USER ?? 'postgres',
				password: DB_PASSWORD ?? 'default',
				pool: {
					max: 3,
					min: 1,
					idle: 10000,
				},
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
					keepAlive: true,
				},
				ssl: true,
		  })
		: new Sequelize(
				`postgres://${DB_USER ?? 'postgres'}:${DB_PASSWORD ?? ''}@${
					DB_HOST ?? 'localhost'
				}/buddycare`,
				{
					logging: false,
					native: false,
				}
		  );

export default sequelize;
