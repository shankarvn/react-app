import { combineEpics, ofType } from 'redux-observable';
import { map, Observable, switchMap } from 'rxjs';
import { Action } from 'typesafe-actions';

import { Article } from '../api/dto';
import { ArticlesService } from '../api/service';
import { CREATE_ARTICLE, FETCH_ARTICLES, fetchArticles, POPULATE_ARTICLES, REMOVE_ARTICLE } from './actions';
import { AppState } from './state';

// epic
const fetchArticles$ = (action$: Observable<Action>, state$: Observable<AppState>, API: ArticlesService) => action$.pipe(
  ofType(FETCH_ARTICLES),
  switchMap((action) => {
    return API.getArticles().pipe(
      map((articles: Article[]) => ({
        type: POPULATE_ARTICLES,
        payload: articles
      }))
    )
  })
);

// epic
const createArticle$ = (action$: Observable<Action>, state$: Observable<AppState>, API: ArticlesService) => action$.pipe(
  ofType(CREATE_ARTICLE),
  switchMap((action: any) => {
    const article = action.payload;
    return API.createArticle(article).pipe(
      map(() => {
        return fetchArticles();
      })
    )
  })
);

const removeArticle$ = (action$: Observable<Action>, state$: Observable<AppState>, API: ArticlesService) => action$.pipe(
  ofType(REMOVE_ARTICLE),
  switchMap((action: any) => {
    const id = action.payload;
    return API.removeArticle(id).pipe(
      map(() => {
        return fetchArticles();
      })
    )
  })
);

export const epics = combineEpics(
  fetchArticles$,
  createArticle$,
  removeArticle$
)