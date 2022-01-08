import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAuthorizationState } from '../redux';

export const ProtectedRoute = ({ component, ...rest }: any) => {
    const authorization = useSelector(selectAuthorizationState);

    const routeComponent = (props: any) => (
        authorization.token !== '' || authorization.expireAt > new Date()
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/auth' }} />
    );
    return <Route {...rest} render={routeComponent} />;
};

export const PublicRoute = ({ component, isAuthenticated, ...rest }: any) => {
    const authorization = useSelector(selectAuthorizationState);
    const routeComponent = (props: any) => (
        authorization.token === '' || authorization.expireAt < new Date()
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/' }} />
    );
    return <Route {...rest} render={routeComponent} />;
};