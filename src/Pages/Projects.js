import React from 'react';
import Menu from '../Components/Menu';
import Title from '../Components/Title';

const Projects = () => {
    return (
        <div className="projects">
            <Menu />
            <Title text="Mes projets" />
            <div className="els">
                    <div className="el">1</div>
                    <div className="el">2</div>
                    <div className="el">3</div>
                    <div className="el">4</div>
                    <div className="el">5</div>
                    <div className="el">6</div>
                    <div className="el">7</div>
                    <div className="el">8</div>
                </div>
        </div>
    );
};

export default Projects;