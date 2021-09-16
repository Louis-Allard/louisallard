import React from 'react';
import Menu from '../Components/Menu';

const home = () => {
    return (
        <div className="home">
           <Menu />
           <div className="data-container">
           <div className="txt">
               Landing page
           </div>
           </div>
        </div>
    );
};

export default home;