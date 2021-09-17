import React from 'react';
import DOMPurify from 'dompurify';
import Menu from '../Components/Menu';
import Title from '../Components/Title';
import { aboutme } from '../lng/fr.js';
import conseils from '../assets/conseils.png';
import expertise from '../assets/expertise.png';
import confiance from '../assets/confiance.png';

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
        </div>
    );
};

export default About;