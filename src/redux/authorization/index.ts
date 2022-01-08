import { AnyAction } from 'redux';
import { AuthorizationDTO } from '../../domain/authorization.dto';

import { AUTH_TOKENS_KEY } from '../../types';

// declare redux action types name for authorization actions.
export enum AuthorizationActionTypes {
    STORE = '@@authorization/STORE',
    REMOVE = '@@authorization/REMOVE',
    LOGIN = '@@authorization/LOGIN'
}

export const initialAuthorizationState: AuthorizationDTO = {
    token: '',
    refresh: '',
    expireAt: new Date()
}

// function that returns initial state based on local storage authorization info.
const getInitialState = (): AuthorizationDTO => {
    const data = localStorage.getItem(AUTH_TOKENS_KEY);
    if (data) {
        return JSON.parse(data) as AuthorizationDTO
    }
    return {
        token: '',
        refresh: '',
        expireAt: new Date()
    }
}

export const authorizationReducer = (
    state: AuthorizationDTO = getInitialState(),
    action: AnyAction): AuthorizationDTO => {

    switch (action.type) {
        case AuthorizationActionTypes.STORE:
            localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(action.payload as AuthorizationDTO));
            return action.payload as AuthorizationDTO
        case AuthorizationActionTypes.REMOVE:
            localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify({
                token: '',
                refresh: '',
                expireAt: new Date()
            } as AuthorizationDTO));

            return {
                token: '',
                refresh: '',
                expireAt: new Date()
            }
        default:
            return state
    }
}