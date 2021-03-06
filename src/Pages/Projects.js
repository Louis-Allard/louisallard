import React from 'react';
import ReactGA from 'react-ga';
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
import p_couscous from '../assets/projetcs/p_couscous.png'
import p_racines from '../assets/projetcs/p_racines.png'
import Footer from '../Components/Footer';

const Projects = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="projects">
            <Head title="Mes projects" />
            <Menu />
            <Title text="Mes projets" />
            <div className="els">
                    <Project src={ p_couscous } alt="project 8" title="Le Bar a Couscous" name="Le Bar a couscous" link="http://www.lebaracouscous.fr" desc="Site internet d'un client qui a ouvert un établissement de vente de couscous a emporter.<br /><br /><p>Le site est réalisé en ReactJS</p>" />
                    <Project src={ p_racines } alt="project 1" title="Des racines et des mots" name="Des racines et des mots" link="http://www.desracinesetdesmots.com/" desc="Site de l'association Des Racines et des Mots. Son objectif majeur est la création, la promotion, le développement et l’organisation d’un prix littéraire doté, relatif à la littérature de l’exil ou du questionnement identitaire.<br /><br /><p>Le site est réalisé sur une base worpress</p>" />
                    <Project src={ p_world } alt="project 2" title="React Wold" name="React Wold" link="https://flamboyant-brattain-ba00b9.netlify.app/" desc="Une consommation d'API me permet de récupérer des drapeaux de pays avec quelques informations complémentaires. Un peu de JavaScript permet de trier l'affichage.<br /><br /><p>Projet réalisé en ReactJS avec une consommation d'API.</p>" />
                    <Project src={ p_ballons } alt="project 3" title="Ballons" name="Ballons" link="Fly away.7z" desc="Ballons est un petit jeux qui consiste a gérer l'avancé de son personnage afin qu'il aille le plus loins possible, tout en évitant les obstacles. Le jeux offre une difficultés évolutive.<br /><br />Afin de jouer, sous windows, cliquer sur l'image, décompresser le dossier et lancer l'executable (.exe).<br /><br /><p>Le jeux est créé en python.</p>" />
                    <Project src={ p_mazerunner} alt="project 4" title="MazeRunner" name="MazeRunner" link="https://github.com/Louis-Allard/labyrinthe" desc="Maze Runner est un petit jeu de labyrinthe sur quatre niveaux. L'objectif est de sortir du niveau pour accéder au suivant.<br /><br /><p>Le programme est réalisé en python.</p>" />
                    <Project src={ p_xeno} alt="project 5" title="Xeno" name="Xeno" link="https://xenoapp.com/" desc="Xeno est une entreprise spécialisée dans le marketing conversationnelle. J'ai travaillé sur des fonctionnalités liées a la chatbox.<br /><br /><p>Le front est réalisé en VueJS et le back en Ruby.</p>" />
                    <Project src={ p_trenois } alt="project 6" title="Trenois Decamps" name="Trenois Decamps" link="http://www.trenois.com" desc="Trenois recrutement est un site internet realisé en 2013 pour le compte de l'entreprise Trenois Decamps. Malgré de légères modifications graphiques effectuées au cours de ces dernières années au niveau graphique, l'essentiel a été conservé.<br /><br /><p>Ce site internet a été réalisé en PHP.</p>" />      
                    <Project src={ p_watcha } alt="project 7" title="Watcha" name="Watcha"  link="https://upbeat-lumiere-02bb22.netlify.app/" desc="Watcha utilise une API permettant de récupérer des données de films. Il permet de retrouver un film par son titre; cliquer sur un acteur renvoi à la liste de ses films.<br /><br /><p>Outre l'API, Watcha a été développé en React.JS.</p>" />                 
                </div>
                <Footer />
        </div>
    );
};

export default Projects;