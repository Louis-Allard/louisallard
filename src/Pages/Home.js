import React from 'react';
import Menu from '../Components/Menu';
import { landing } from "../lng/fr.js";

const home = () => {
    return (
        <div className="home">
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