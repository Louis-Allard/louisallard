import React from 'react';
import { apropos } from '../lng/fr.js';
import Menu from '../Components/Menu';
import Title from '../Components/Title';
import react from '../assets/about/react.png'; 
import sass from '../assets/about/sass.png'

const Apropos = () => {
    return (
        <div className="apropos">
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