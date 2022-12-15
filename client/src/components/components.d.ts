import type { Attributes } from '../utils/utils';

interface useNavLink {
	isActive: boolean;
	isPending: boolean;
}

interface LinkRoutes {
	link: Navigate[];
}

export interface Content {
	type: string;
	placeholder: string;
	name: string;
}

interface FormsAssociation {
	form: Attributes[];
	submit: string;
}

interface Type {
	email?: string;
	password?: string;
}
