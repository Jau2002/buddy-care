import { Options } from 'sequelize';

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
	options?: Options;
}
