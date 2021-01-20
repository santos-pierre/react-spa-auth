import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getAuthUser } from '../../redux/users/userActions';
import Loading from '../Loading/Loading';

const PublicRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch();
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const auth = async () => {
            try {
                await dispatch(getAuthUser());
                setIsAuthenticate(true);
            } catch (error) {
                setIsAuthenticate(false);
            } finally {
                setIsLoading(false);
            }
        };
        auth();
    }, [dispatch]);

    return !isLoading ? (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticate ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/'} />
                )
            }
        />
    ) : (
        <Loading />
    );
};

export default PublicRoute;
