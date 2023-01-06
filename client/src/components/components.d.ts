import { PetAction } from '../features/pets/pets';
import type { Attributes } from '../utils/utils';

interface LinkRoutes {
	link: Navigate[];
}

export interface Content {
	type: string;
	placeholder: string;
	name: string;
	display: string;
}

interface FormsAssociation {
	form: Attributes[];
	submit: string;
	title: string;
}

interface Type {
	email?: string;
	password?: string;
	code?: string;
	surname?: string;
	name?: string;
	country?: string;
	state?: string;
	direction?: string;
	number?: string;
	postal?: string;
	Facebook?: string;
	Instagram?: string;
}

interface AllPets {
	allUserPets?: PetAction[];
	petForUser?: PetAction[];
}
