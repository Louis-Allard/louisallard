import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1>
            <br />
            <p>la.devweb@yahoo.com</p>
            <p>http://www.louisallard.fr</p>
            <p>Made with love and React JS</p>
        </div>
    );
};

export default About;