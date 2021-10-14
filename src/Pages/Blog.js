import React from 'react';
import ReactGA from 'react-ga';
import Menu from '../Components/Menu';
import Head from '../Components/Head';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Post from '../Components/Post';
import { blog } from '../lng/fr.js'


const Blog = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="blog">
            <Head title="Mon blog" />
            <Menu />
            <Title text="Mon blog" />
            <div className="data-container">
                <Post title={ blog.title09 } content={ blog.content09 }  date={ blog.date09 } />
                <iframe src="https://anchor.fm/lavienumerique/embed/episodes/5---Grer-au-mieux-le-tltravail-e18p020" height="102px" width="400px" frameborder="0" scrolling="no" title="transformer lessai"></iframe>
                <Post title={ blog.title08 } content={ blog.content08 }  date={ blog.date08 } />
                <iframe src="https://anchor.fm/lavienumerique/embed/episodes/4-Comment-se-crer-son-premier-rseau-e18kepc" height="102px" width="400px" frameborder="0" scrolling="no" title="transformer lessai"></iframe>
                <Post title={ blog.title07 } content={ blog.content07 }  date={ blog.date07 } />
                <Post title={ blog.title06 } content={ blog.content06 }  date={ blog.date06 } />
                <Post title={ blog.title05 } content={ blog.content05 }  date={ blog.date05 } />
                <iframe src="https://anchor.fm/lavienumerique/embed/episodes/Comment-transformer-lessai-e18efei" height="102px" width="400px" frameborder="0" scrolling="no" title="transformer lessai"></iframe>
                <Post title={ blog.title04 } content={ blog.content04 }  date={ blog.date04 } />
                <Post title={ blog.title03 } content={ blog.content03 }  date={ blog.date03 } />
                <iframe src="https://anchor.fm/lavienumerique/embed/episodes/Le-savoir--sa-transmission-e189hi1" height="102px" width="400px" frameborder="0" scrolling="no" title="lesavoirsatransmission"></iframe>
                <Post title={ blog.title02 } content={ blog.content02 }  date={ blog.date02 } />
                <iframe src="https://anchor.fm/lavienumerique/embed/episodes/Le-tltravail-e185ebs/a-a6kd2hi" height="102px" width="400px" frameborder="0" scrolling="no" title="lavienumerique"></iframe> 
                <Post title={ blog.title01 } content={ blog.content01 }  date={ blog.date01 } />
            </div>
            <Footer />
        </div>
    );
};

export default Blog;