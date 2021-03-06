import React from 'react';
import { menu } from '../lng/fr.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPassport,faBriefcase, faCode, faCubes, faUserSecret, faMicrophoneAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons'
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
                           { menu.accueil }
                        </span>
                        </NavLink>
                  
                </li>
                <li className="has-subnav">
                <NavLink exact to="/about" activeClassName="nav-active">
                <FontAwesomeIcon icon={faPassport} className="fa-2x" />
                        <span className="nav-text">
                        { menu.apropos }
                            </span>
                </NavLink>
                </li>
                <li className="has-subnav">
                <NavLink exact to="/cv" activeClassName="nav-active">
                <FontAwesomeIcon icon={faBriefcase} className="fa-2x" />
                        <span className="nav-text">
                        { menu.parcours }
                            </span>
                </NavLink>
                </li>                
                <li className="has-subnav">
                <NavLink exact to="/projects" activeClassName="nav-active">
                <FontAwesomeIcon icon={faCode} className="fa-2x" />
                        <span className="nav-text">
                        { menu.projets }
                        </span>
                    </NavLink>
                    
                </li>
                <li className="has-subnav">
                <NavLink exact to="/blog" activeClassName="nav-active">
                <FontAwesomeIcon icon={faCubes} className="fa-2x" />
                        <span className="nav-text">
                        { menu.blog }
                        </span>
                    </NavLink>
                    
                </li>   
                <li className="has-subnav">
                <NavLink exact to="/podcasts" activeClassName="nav-active">
                <FontAwesomeIcon icon={faMicrophoneAlt} className="fa-2x" />
                        <span className="nav-text">
                        { menu.podcast }
                        </span>
                    </NavLink>
                    
                </li>    
                <li className="has-subnav">
                <NavLink exact to="/contact" activeClassName="nav-active">
                <FontAwesomeIcon icon={faMailBulk} className="fa-2x" />
                        <span className="nav-text">
                        { menu.contact }
                        </span>
                    </NavLink>
                    
                </li>                     
                <li className="has-subnav">
                <NavLink exact to="/apropos" activeClassName="nav-active">
                <FontAwesomeIcon icon={faUserSecret} className="fa-2x" />
                        <span className="nav-text">
                        { menu.site }
                        </span>
                    </NavLink>
                    
                </li>          
                </ul>
                </div>
        </nav>
    );
};

export default Menu;