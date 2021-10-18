import React from 'react';
import ReactGA from 'react-ga';
import Podcast from '../Components/Podcast'
import Title from '../Components/Title'
import Menu from '../Components/Menu';
import Head from '../Components/Head';
import { podcast } from '../lng/fr';
import spotify from '../assets/podcasts/spotify.png';
import youtube from '../assets/podcasts/youtube.png';

const Podcasts = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="podcasts">
            <Head title="La vie numérique" />
            <Menu />
            <Title text="Mon podcast" />
            <div className="data-container">
            <div className="links">
                <p>{ podcast.content }</p> <br />
                <span><b>Lien spotify: </b></span>
                <a href="https://open.spotify.com/show/49z70drWXghOH0fysQKpxN?si=ZNe94RiuQ0aIZ_yZcPh_PQ&dl_branch=1" target="_blank" rel="noreferrer"><img src={spotify} alt="spotify" title="lien vers spotify" /></a>
                    &nbsp;&nbsp; <span><b>Lien Youtube: </b></span>
                    <a href="https://www.youtube.com/channel/UCNhCqqmrDDYOy3pNdXTZ-Yg/videos" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube" title="lien vers youtube" /></a>
            </div>
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/6-Personne-ne-me-rpond--mon-cv-e18uma5" height="180px" width="800px" title="personne ne repond a mon cv" frameborder="no" scrolling="no" />
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/5---Grer-au-mieux-le-tltravail-e18p020" height="180px" width="800px" title="gérer le télétravail" frameborder="no" scrolling="no" />
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/4-Comment-se-crer-son-premier-rseau-e18kepc" height="180px" width="800px" title="le savoir" frameborder="no" scrolling="no" />
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/3-Comment-transformer-lessai-e18efei" height="180px" width="800px" title="le savoir" frameborder="no" scrolling="no" />
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/Le-savoir--sa-transmission-e189hi1" height="180px" width="800px" title="le savoir" frameborder="no" scrolling="no" />
            <Podcast link="https://anchor.fm/lavienumerique/embed/episodes/Le-tltravail-e185ebs" height="180px" width="800px" title="le télétravail" frameborder="no" scrolling="no" />
            </div>
           
        </div>
    );
};

export default Podcasts;