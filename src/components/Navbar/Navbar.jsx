import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/users/userActions';
import { getAllNavLinks, getRoute } from '../../routes/routes';
import NavLinkDesktop from './NavLinkDesktop';
import { ReactComponent as Logo } from './../../logo.svg';
import NavLinkMobile from './NavLinkMobile';
import { getUser } from '../../redux/users/userSelectors';

const Navbar = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const logoutUser = useCallback(() => {
        dispatch(logout());
        history.push('/login');
    }, [dispatch, history]);

    return (
        <nav className="bg-white shadow dark:bg-neutral-700">
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-400 dark:hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            <svg
                                className={`${
                                    isOpen ? 'hidden' : 'block'
                                } w-6 h-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            <svg
                                className={`${
                                    isOpen ? 'block' : 'hidden'
                                } w-6 h-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                        <div className="flex items-center flex-shrink-0">
                            <Link to={getRoute('home').path}>
                                <Logo className="w-auto h-10" />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {getAllNavLinks().map(({ name, path }) =>
                                // If this is a Github User remove the profile link to it.

                                !(
                                    user.is_github_account && name === 'Profile'
                                ) ? (
                                    <NavLinkDesktop to={path} exact key={name}>
                                        {name}
                                    </NavLinkDesktop>
                                ) : null
                            )}
                            <NavLinkDesktop
                                to={getRoute('login').path}
                                onClick={logoutUser}
                            >
                                Log Out
                            </NavLinkDesktop>
                        </div>
                    </div>
                </div>
            </div>
            {/*
                Mobile menu, toggle classes based on menu state.
            */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="pt-2 pb-4 space-y-1">
                    {getAllNavLinks().map(({ name, path }) =>
                        // If this is a Github User remove the profile link to it.
                        !(user.is_github_account && name === 'Profile') ? (
                            <NavLinkMobile to={path} exact key={name}>
                                {name}
                            </NavLinkMobile>
                        ) : null
                    )}
                    <NavLinkMobile
                        to={getRoute('login').path}
                        onClick={logoutUser}
                    >
                        Log Out
                    </NavLinkMobile>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
