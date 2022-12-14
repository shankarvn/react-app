import { Article } from '../api/dto';

export interface AppState {
    articlesState: ArticlesState;
}

export interface ArticlesState {
    articles: Record<string, Article>;
}

export const initialState = {
    articlesState: {
        articles: []
    }
}