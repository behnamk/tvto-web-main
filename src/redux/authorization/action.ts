import { AnyAction } from 'redux';

import { AuthorizationActionTypes } from '.';
import { AuthorizationDTO } from '../../domain/authorization.dto';

export const setAuthorizationState = (authorization: AuthorizationDTO): AnyAction => {
    return {
        type: AuthorizationActionTypes.STORE,
        payload: authorization
    }
}