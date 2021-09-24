import React from 'react';
import Head from '../Components/Head';
import Menu from '../Components/Menu';
import Project from '../Components/Project';
import Title from '../Components/Title';
import p_world from '../assets/projetcs/p_world.png'
import p_ballons from '../assets/projetcs/p_ballons.png'
import p_mazerunner from '../assets/projetcs/p_mazerunner.png'
import p_xeno from '../assets/projetcs/p_xeno.png'
import p_trenois from '../assets/projetcs/p_td.png'
import p_watcha from '../assets/projetcs/p_watcha.png'
import Footer from '../Components/Footer';


const Projects = () => {
    return (
        <div className="projects">
            <Head title="Mes projects" />
            <Menu />
            <Title text="Mes projets" />
            <div className="els">
                    <Project src={ p_world } alt="project 1" title="React Wold" name="React Wold" desc="Une consommation d'API me permet de récupérer des drapeaux de pays avec quelques informations complémentaires. Un peu de JavaScript permet de trier l'affichage.<br /><br /><p>Projet réalisé en ReactJS avec une consommation d'API.</p>" />
                    <Project src={ p_ballons } alt="project 2" title="Ballons" name="Ballons" desc="Ballons est un petit jeux qui consiste a gérer l'avancé de son personnage afin qu'il aille le plus loins piossible, tout en évitant les obstacles. Le jeux offre une difficultés évolutive.<br /><br /><p>Le jeux est créé en python.</p>" />
                    <Project src={ p_mazerunner} alt="project 3" title="MazeRunner" name="MazeRunner" desc="Maze Runner est un petit jeu de labyrinthe sur quatre niveaux. L'objectif est de sortir du niveau pour accéder au suivant.<br /><br /><p>Le programme est réalisé en python.</p>" />
                    <Project src={ p_xeno} alt="project 4" title="Xeno" name="Xeno" desc="Xeno est une entreprise spécialisée dans le marketing conversationnelle. J'ai travaillé sur des fonctionnalités liées a la chatbox.<br /><br /><p>Le front est réalisé en VueJS et le back en Ruby.</p>" />
                    <Project src={ p_trenois } alt="project 5" title="Trenois Decamps" name="Trenois Decamps" desc="Trenois recrutement est un site internet realisé en 2013 pour le compte de l'entreprise Trenois Decamps. Malgré de légères modifications graphiques effectuées au cours de ces dernières années au niveau graphique, l'essentiel a été conservé.<br /><br /><p>Ce site internet a été réalisé en PHP.</p>" />      
                    <Project src={ p_watcha } alt="project 6" title="Watcha" name="Watcha" desc="Watcha utilise une API permettant de récupérer des données de films. Il permet de retrouver un film par son titre; cliquer sur un acteur renvoi à la liste de ses films.<br /><br /><p>Outre l'API, Watcha a été développé en React.JS.</p>" />                 
                </div>
                <Footer />
        </div>
    );
};

export default Projects;