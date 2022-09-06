import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import { API } from '../api/service';
import * as actions from './actions';
import { epics } from './epics';
import { rootReducer } from './reducers';
import { AppState } from './state';


export type RootStateType = AppState;
export type ActionsType = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  AppState
>({
  dependencies: API,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState?: any) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();

epicMiddleware.run(epics);

export { store, actions };
