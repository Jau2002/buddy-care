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

interface Navigate {
	id: number;
	route: string;
	url: string;
}

interface useNavLink {
	isActive: boolean;
	isPending: boolean;
}

interface LinkRoutes {
	link: Navigate[];
}
