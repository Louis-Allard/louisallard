import React from 'react';
import Podcast from '../Components/Podcast'
import Title from '../Components/Title'
import Menu from '../Components/Menu';
import Head from '../Components/Head';
import { podcast } from '../lng/fr';


const Podcasts = () => {
    return (
        <div className="podcasts">
            <Head title="La vie numérique" />
            <Menu />
            <Title text="Mon podcast" />
            <div className="data-container">
            <p>{ podcast.content }</p> 
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/Le-savoir--sa-transmission-e189hi1" height="180px" width="800px" title="le savoir" frameborder="no" scrolling="no" />
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/Le-tltravail-e185ebs" height="180px" width="800px" title="le télétravail" frameborder="no" scrolling="no" />
            </div>
           
        </div>
    );
};

export default Podcasts;