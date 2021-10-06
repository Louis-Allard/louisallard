import React from 'react';
import ReactGA from 'react-ga';
import { apropos } from '../lng/fr.js';
import Menu from '../Components/Menu';
import Head from '../Components/Head';
import Title from '../Components/Title';
import react from '../assets/about/react.png'; 
import sass from '../assets/about/sass.png'

const Apropos = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="apropos">
            <Head title="A propos" />
           <Menu />
            <Title text="A propos de ce site" />
            <div className="data-container">
                { apropos.txt }
                    <ul>
                        <li><img src={react} alt="ReactJS" /></li>
                        <li><img src={sass} alt="SCSS" /></li>
                    </ul>
            </div>
        </div>
    );
};

export default Apropos;