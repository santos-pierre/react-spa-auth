import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../redux/users/userActions';

const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutUser = useCallback(() => {
        dispatch(logout());
        history.push('/login');
    }, [dispatch, history]);

    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="logo"
                            />
                        </NavLink>
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                            <NavLink
                                to="/"
                                exact
                                activeClassName="border-indigo-500 text-gray-900 hover:border-indigo-500"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to="/profile"
                                exact
                                activeClassName="border-indigo-500 text-gray-900 hover:border-indigo-500"
                                className="border-transparent text-gray-500  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Profile
                            </NavLink>
                        </div>
                    </div>
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                        <button
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                            onClick={logoutUser}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
