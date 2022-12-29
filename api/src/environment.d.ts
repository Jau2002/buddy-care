declare global {
	namespace NodeJS {
		interface ProcessEnv {
			GITHUB_AUTH_TOKEN: string;
			NODE_ENV: 'development' | 'production';
			DB_NAME?: string;
			DB_PORT?: string;
			DB_HOST?: string;
			DB_PASSWORD?: string;
		}
	}
}
