import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/about" activeClassName="nav-active">
                A propos
            </NavLink>
            <NavLink exact to="/projects" activeClassName="nav-active">
                Mes projets
            </NavLink>            
        </div>
    );
};

export default Menu;