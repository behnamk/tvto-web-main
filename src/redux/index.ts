import { combineReducers, createStore } from 'redux';

import { authorizationReducer } from './authorization';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    authorization: authorizationReducer
});

export const store = createStore(rootReducer);

// authorization state selector function.
export const selectAuthorizationState = (rootState: RootState) =>
    rootState.authorization;