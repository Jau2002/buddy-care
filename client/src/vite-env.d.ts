import 'vite/client';

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.jpg';
declare module '*.png';
