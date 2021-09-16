import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from "../assets/moi.jpeg";

const Menu = () => {
    return (
            <nav className="menu">
                <div className="main-menu">
                <img  className="pic" src={photo} alt="moi" />
            <ul>
                <li>
                <NavLink exact to="/" activeClassName="nav-active">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Accueil
                        </span>
                        </NavLink>
                  
                </li>
                <li class="has-subnav">
                <NavLink exact to="/about" activeClassName="nav-active">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            A propos
                            </span>
                        </NavLink>
                </li>
                <li class="has-subnav">
                <NavLink exact to="/projects" activeClassName="nav-active">
                       <i class="fa fa-tasks fa-2x"></i>
                        <span class="nav-text">
                            Mes projets
                        </span>
                    </NavLink>
                    
                </li>
                <li class="has-subnav">
                <NavLink exact to="/blog" activeClassName="nav-active">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Mon blog
                        </span>
                    </NavLink>
                    
                </li>                
                </ul>
                </div>
        </nav>
    );
};

export default Menu;