import { Article } from '../api/dto';

export const FETCH_ARTICLES = 'FETCH-ARTICLES';
export const fetchArticles = () => ({ type: FETCH_ARTICLES, payload: null });


export const POPULATE_ARTICLES = 'POPULATE-ARTICLES';
export const populateArticles = (articles: Article[]) => ({ type: POPULATE_ARTICLES, payload: articles });