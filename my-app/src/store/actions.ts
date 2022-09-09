import { PayloadAction } from 'typesafe-actions';
import { Article } from '../api/dto';

export const FETCH_ARTICLES = 'FETCH-ARTICLES';
export const fetchArticles = (): PayloadAction<string, any> => ({ type: FETCH_ARTICLES, payload: null });


export const POPULATE_ARTICLES = 'POPULATE-ARTICLES';
export const populateArticles = (articles: Article[]): PayloadAction<string, any> => ({ type: POPULATE_ARTICLES, payload: articles });

export const CREATE_ARTICLE = 'CREATE-ARTICLE';
export const createArticle = (article: Article): PayloadAction<string, any> => ({ type: CREATE_ARTICLE, payload: article });

export const REMOVE_ARTICLE = 'REMOVE-ARTICLE';
export const removeArticle = (articleId: string): PayloadAction<string, any> => ({ type: REMOVE_ARTICLE, payload: articleId });
