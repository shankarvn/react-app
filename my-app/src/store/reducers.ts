import { combineReducers } from '@reduxjs/toolkit';

import { POPULATE_ARTICLES } from './actions';
import { ArticlesState } from './state';

export const articlesReducer = (state: ArticlesState = {articles: {}}, action: any) => {
    switch (action.type) {
        case POPULATE_ARTICLES:
            return {
                ...state,
                articles: action.payload
            };

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    articlesState: articlesReducer,
});