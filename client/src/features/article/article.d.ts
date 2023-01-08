import type { Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';

interface ArticleAction {
	id: number;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	contenido: string;
}

interface ArticleState {
	articles: ArticleAction[];
}

type SliceArticle = Slice<ArticleState>;

type PayloadArticle = PayloadAction<ArticleState>;

type SelectorArticle = (state: RootState) => ArticleAction[];

interface DispatchArticle {
	payload?: ArticleAction;
	type: string;
}

type GetFilterArticle = Promise<DispatchArticle>;

// type GetFilterArticles = (dispatch: Dispatch) => GetArticles;

type GetAllArticles = Promise<DispatchArticle>;

type GetArticles = (dispatch: Dispatch) => GetAllArticles;
