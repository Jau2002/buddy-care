// import { Options } from 'sequelize';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			DB_PORT?: number;
			DB_NAME?: string;
			DB_HOST?: string;
			DB_PASSWORD?: string;
		}
	}
}

export interface SequelizeProduction {
	uri: string;
	options: Options;
	database?: string;
	dialect?: string;
	host?: string;
	port?: number;
	username?: string;
	password?: string;
	Pool: Pool;
	dialectOptions: DialectOptions;
	ssl: boolean;
}

interface Pool {
	max: number;
	min: number;
	idle: number;
}

interface DialectOptions {
	ssl: Ssl;
	keepAlive: boolean;
}

interface Ssl {
	require: boolean;
	rejectUnauthorized: boolean;
}
