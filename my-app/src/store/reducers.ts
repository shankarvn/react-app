import { combineReducers } from '@reduxjs/toolkit';

import { Article } from '../api/dto';
import { POPULATE_ARTICLES, REMOVE_ARTICLE } from './actions';
import { ArticlesState } from './state';

export const articlesReducer = (state: ArticlesState = { articles: {} }, action: any) => {
    switch (action.type) {
        case POPULATE_ARTICLES: {
            const newState = { ...state };
            const articles: Article[] = action.payload;
            articles.forEach((each: Article) => {
                newState.articles[each.id] = each;
            })
            return newState;
        }
        case REMOVE_ARTICLE: {
            const newState = { ...state };
            const id = action.payload;
            delete newState.articles[id];
            return newState;
        }
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    articlesState: articlesReducer,
});