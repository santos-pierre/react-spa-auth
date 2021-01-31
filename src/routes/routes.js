const ROUTES = [
    {
        name: 'login',
        path: '/login',
    },
    {
        name: 'register',
        path: '/register',
    },
    {
        name: 'forgot-password',
        path: '/forgot-password',
    },
    {
        name: 'reset-password',
        path: '/reset-password',
    },
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'profile',
        path: '/profile',
    },
];

const NavBarLinks = [
    {
        name: 'Dashboard',
        path: '/',
    },
    {
        name: 'Profile',
        path: '/profile',
    },
];

const getAllRoutes = () => {
    return ROUTES;
};

const getAllNavLinks = () => {
    return NavBarLinks;
};

const getRoute = (name, params) => {
    let route = ROUTES.filter((route) => route.name === name)[0];
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            route = { ...route, path: route.path.replace(`:${key}`, value) };
        }
    }
    return route;
};

export { getAllRoutes, getRoute, getAllNavLinks };
