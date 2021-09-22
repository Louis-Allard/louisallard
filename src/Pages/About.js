import React from 'react';
import DOMPurify from 'dompurify';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Title from '../Components/Title';
import { aboutme } from '../lng/fr.js';
import conseils from '../assets/about/conseils.png';
import expertise from '../assets/about/expertise.png';
import confiance from '../assets/about/confiance.png';
import html from '../assets/about/html.png';
import bootstrap from '../assets/about/bootstrap.png';
import css from '../assets/about/css.png';
import git from '../assets/about/git.png';
import github from '../assets/about/github.png';
import js from '../assets/about/js.png';
import linux from '../assets/about/linux.png';
import mysql from '../assets/about/mysql.png';
import node from '../assets/about/node.png';
import php from '../assets/about/php.png';
import python from '../assets/about/python.png';
import redux from '../assets/about/redux.png';
import vuejs from '../assets/about/vuejs.png';
import react from '../assets/about/react.png';
import sass from '../assets/about/sass.png';


const About = () => {

    return (
        <div className="about">
            <Menu />
            <Title text="A propos de moi" />
            <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(aboutme.content) }} />
            <div className="cards">
                <div className="card">
                    <img src={ conseils } alt="conseils" />
                    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(aboutme.conseils)}} />
                    </div>
                <div className="card">
                <img src={ expertise } alt="expertise" />
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(aboutme.expertise )}} />
                </div>
                <div className="card">
                <img src={ confiance } alt="confiance" />
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize( aboutme.confiance)}} />
                </div>
            </div>
            <div className="skills">
                <div className="myskills" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize( aboutme.myskills)}} />
                <div className="skillsico">
                    <div className="el"><img src={html} alt="html" title="html" /></div>
                    <div className="el"><img src={css} alt="css" title="css"/></div>
                    <div className="el"><img src={sass} alt="sass" title="sass"/></div>
                    <div className="el"><img src={bootstrap} alt="bootstrap" title="bootstrap" /></div>
                    <div className="el"><img src={linux} alt="linux" title="linux" /></div>
                    <div className="el"><img src={git} alt="git" title="git" /></div>
                    <div className="el"><img src={github} alt="github" title="github" /></div>
                    <div className="el"><img src={js} alt="js" title="js" /></div>
                    <div className="el"><img src={node} alt="node" title="node" /></div>
                    <div className="el"><img src={mysql} alt="mysql" title="mysql" /></div>
                    <div className="el"><img src={php} alt="php" title="php" /></div>
                    <div className="el"><img src={python} alt="python" title="python" /></div>
                    <div className="el"><img src={redux} alt="redux" title="redux" /></div>
                    <div className="el"><img src={vuejs} alt="vuejs" title="vuejs" /></div>
                    <div className="el"><img src={react} alt="react" title="reactjs" /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;