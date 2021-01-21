import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import GuardedRoute from './components/GuardedRoute/GuardedRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import UserProfile from './pages/Dashboard/UserProfile/UserProfile';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <GuardedRoute path="/" exact component={Dashboard} />
                <GuardedRoute path="/profile" exact component={UserProfile} />
                {/* Cannot access those route when authenticate */}
                <PublicRoute path="/login" exact component={Login} />
                <PublicRoute path="/register" exact component={Register} />
                <PublicRoute
                    path="/forgot-password"
                    exact
                    component={ForgotPassword}
                />
                <PublicRoute path="/reset-password" component={ResetPassword} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
