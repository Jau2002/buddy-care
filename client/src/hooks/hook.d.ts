import { ThunkDispatch } from '@reduxjs/toolkit';
import type { Params } from 'react-router-dom';
import type { Type } from '../components/components';
import type { ArticleAction, ArticleState } from '../features/article/article';
import type { LogInState } from '../features/logger/logger';
import type { PetAction, PetsState } from '../features/pets/pets';

type Submit = (values: Type) => any;

interface Auth {
	handleSubmit: Submit;
	defaultInputs: Type;
	pathname: string;
	useIsLogged: () => boolean;
}

interface Cleaning {
	handleClick;
	logger: LogInAction[];
}

interface MedicalPets {
	allUserPets: PetAction[];
	pathname: string;
	id_pet?: PetAction;
	petForUser: PetAction[];
}

interface Paging {
	totalArticle: ArticleAction[];
	currentPage: number;
	handleNextPage;
	totalPages: number;
	handlePrevPage;
	setTotalPages;
}

interface Filter {
	search;
	handleOnSearch;
}

interface Exclusive {
	article: ArticleAction[];
}

type dispatcherArticles = ThunkDispatch<ArticleState>;

type dispatcherUser = ThunkDispatch<LogInState>;

type dispatchedUser = ThunkDispatch<Clear>;

type dispatchPets = ThunkDispatch<PetsState>;

type Param = Readonly<Params<string>>;

type LocalStorage = string | null;
