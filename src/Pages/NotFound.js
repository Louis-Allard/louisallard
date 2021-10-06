import React from 'react';
import ReactGA from 'react-ga';
import Head from '../Components/Head';
import Menu from '../Components/Menu';

const NotFound = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div>
            <Head title="PAGE NON TROUVÉE" />
            <Menu />
            <h1>Not Found</h1>
        </div>
    );
};

export default NotFound;