import React from 'react';
import Menu from '../Components/Menu';
import Project from '../Components/Project';
import Title from '../Components/Title';
import p_world from '../assets/projetcs/p_world.png'
import p_ballons from '../assets/projetcs/p_ballons.png'
import p_mazerunner from '../assets/projetcs/p_mazerunner.png'
import p_xeno from '../assets/projetcs/p_xeno.png'
import p_trenois from '../assets/projetcs/p_td.png'
import p_watcha from '../assets/projetcs/p_watcha.png'


const Projects = () => {
    return (
        <div className="projects">
            <Menu />
            <Title text="Mes projets" />
            <div className="els">
                    <Project src={ p_world } alt="project 1" title="React Wold" desc="Une consommation d'API me permet de récupérer des drapeaux de pays avec quelques informations complémentaires. Un peu de JavaScript permet de trier l'affichage. Projet réalisé en ReactJS avec une consommation d'API." />
                    <Project src={ p_ballons } alt="project 2" title="Ballons" desc="Ballons est un petit jeux qui consiste a gérer l'avancé de son personnage afin qu'il aille le plus loins piossible, tout en évitant les obstacles. Le jeux offre une difficultés évolutive. Le jeux est créé en python." />
                    <Project src={ p_mazerunner} alt="project 3" title="MazeRunner" desc="Maze Runner est un petit jeu de labyrinthe sur quatre niveaux. L'objectif est de sortir du niveau pour accéder au suivant. Le programme est réalisé en python" />
                    <Project src={ p_xeno} alt="project 4" title="Xeno" desc="Xeno est une entreprise spécialisée dans le marketing conversationnelle. J'ai travaillé sur des fonctionnalités liées a la chatbox. Le front est réalisé en VueJS et le back en Ruby." />
                    <Project src={ p_trenois } alt="project 5" title="Trenois Decamps" desc="Trenois recrutement est un site internet realisé en 2013 pour le compte de l'entreprise Trenois Decamps. Malgré de légères modifications graphiques effectuées au cours de ces dernières années au niveau graphique, l'essentiel a été conservé. Ce site internet a été réalisé en PHP" />      
                    <Project src={ p_watcha } alt="project 6" title="Watcha" desc="Watcha utilise une API permettant de récupérer des données de films. Il permet de retrouver un film par son titre; cliquer sur un acteur renvoi à la liste de ses films. Outre l'API, Watcha a été développé en React.JS." />                 
                </div>
        </div>
    );
};

export default Projects;