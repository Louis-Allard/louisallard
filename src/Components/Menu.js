import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPassport,faBriefcase, faCode, faCubes } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import photo from "../assets/moi2.jpeg";

const Menu = () => {
    return (
            <nav className="menu">
                <div className="main-menu">
                    <div className="pic-container">
                <img className="pic" src={photo} alt="moi" />
                </div>
            <ul>
                <li>
                <NavLink exact to="/" activeClassName="nav-active">
                        <FontAwesomeIcon icon={faHome} className="fa-2x" />
                        <span className="nav-text">
                            Accueil
                        </span>
                        </NavLink>
                  
                </li>
                <li className="has-subnav">
                <NavLink exact to="/about" activeClassName="nav-active">
                <FontAwesomeIcon icon={faPassport} className="fa-2x" />
                        <span className="nav-text">
                            A propos
                            </span>
                </NavLink>
                </li>
                <li className="has-subnav">
                <NavLink exact to="/cv" activeClassName="nav-active">
                <FontAwesomeIcon icon={faBriefcase} className="fa-2x" />
                        <span className="nav-text">
                            Mon parcours
                            </span>
                </NavLink>
                </li>                
                <li className="has-subnav">
                <NavLink exact to="/projects" activeClassName="nav-active">
                <FontAwesomeIcon icon={faCode} className="fa-2x" />
                        <span className="nav-text">
                            Mes projets
                        </span>
                    </NavLink>
                    
                </li>
                <li className="has-subnav">
                <NavLink exact to="/blog" activeClassName="nav-active">
                <FontAwesomeIcon icon={faCubes} className="fa-2x" />
                        <span className="nav-text">
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