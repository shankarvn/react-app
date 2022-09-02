import { combineEpics, ofType } from 'redux-observable';
import { map, mergeMap, Observable } from 'rxjs';
import { Action } from 'typesafe-actions';

import { Article } from '../components/api/dto';
import { API } from '../components/api/service';
import { FETCH_ARTICLES, POPULATE_ARTICLES } from './actions';
import { AppState } from './state';

// epic
const fetchArticles$ = (action$: Observable<Action>, state$: Observable<AppState>) => action$.pipe(
    ofType(FETCH_ARTICLES),
    mergeMap((action) => {
      return API.getArticles().pipe(
        map((articles: Article[]) => ({
            type: POPULATE_ARTICLES,
            payload: articles
          }))
      )
    })
  );

  export const epics = combineEpics(
    fetchArticles$
  )