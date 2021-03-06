import React from 'react';
import ReactGA from 'react-ga';
import Head from '../Components/Head';
import Menu from '../Components/Menu';
import { landing } from "../lng/fr.js";

const home = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="home">
            <Head title="Developpeur de solutions" />
           <Menu />
           <div className="data-container">
        <div className="txt">{ landing.name }</div>
           <div className="title">
           <div>Developpeur </div> 
            <div>
                <span>de solutions</span>
            </div>
           </div>
           </div>
        </div>
    );
};
export default home;