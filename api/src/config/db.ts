import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import type { SequelizeProduction } from '../environment';

dotenv.config({ path: '.env.development' });

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, NODE_ENV, DB_PORT } =
	process.env;

const sequelize: Sequelize | SequelizeProduction =
	NODE_ENV === 'production'
		? (new Sequelize({
				database: DB_NAME ?? 'buddycare',
				dialect: 'postgres',
				host: DB_HOST ?? 'localhost',
				port: DB_PORT ?? 5432,
				username: DB_USER ?? 'postgres',
				password: DB_PASSWORD ?? '',
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
		  }) as SequelizeProduction)
		: new Sequelize(
				'postgres://djqjleey:x_ZBCp-Ew1Z8G3CCxyvX2cXNEGOtfPBZ@motty.db.elephantsql.com/djqjleey',
				{
					logging: false,
					native: false,
				}
		  );

export default sequelize;
