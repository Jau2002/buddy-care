import 'vite/client';

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

interface RouteError {
	status: number;
	statusText: string;
	error: object;
}
