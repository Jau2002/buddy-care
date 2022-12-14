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
