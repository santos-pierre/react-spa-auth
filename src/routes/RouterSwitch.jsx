import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import GuardedRoute from '../components/GuardedRoute/GuardedRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import { getRoute } from './routes';
import Dashboard from '../pages/Dashboard/Dashboard';
import UserProfile from '../pages/Dashboard/UserProfile/UserProfile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';

const RouterSwitch = () => {
    return (
        <Switch>
            <GuardedRoute
                component={Dashboard}
                path={getRoute('home').path}
                exact={true}
            />
            <GuardedRoute
                component={UserProfile}
                path={getRoute('profile').path}
                exact={true}
            />
            <PublicRoute
                component={Login}
                path={getRoute('login').path}
                exact={true}
            />
            <PublicRoute
                component={Register}
                path={getRoute('register').path}
                exact={true}
            />
            <PublicRoute
                component={ForgotPassword}
                path={getRoute('forgot-password').path}
                exact={true}
            />
            <PublicRoute
                component={ResetPassword}
                path={getRoute('reset-password').path}
            />
            <Redirect to={getRoute('home').path} />
        </Switch>
    );
};

export default RouterSwitch;
