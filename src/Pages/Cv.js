import React from 'react';
import ReactGA from 'react-ga';
import DOMPurify from 'dompurify';
import Head from '../Components/Head';
import { moncv } from '../lng/fr.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Title from '../Components/Title';
import photo from "../assets/moi2.jpeg";
import { parcours } from '../lng/fr';
import Footer from '../Components/Footer';

const cv = () => {
    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="cv">
            <Head title="Mon parcours" />
            <Title text="Mon Parcours" />
            <div className="data-container">
            <div className="whoami">
                <div className="pic">
                    <img src={ photo } alt="moi" />
                    <div className="contact">
                        <p>{ moncv.titre_email }&nbsp;{ moncv.email }</p>
                        <p>{ moncv.titre_addr }&nbsp;{ moncv.addr }</p>
                        <p><FontAwesomeIcon icon={faFilePdf} />&nbsp;<a href="https://cvdesignr.com/p/5e415998a2cbb" target="_blank" rel="noreferrer">{ moncv.pdf }</a></p>
                    </div>
                </div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parcours.desc) }}>
            </div>
        </div>
        <hr />
        <div className="parcours">
            <span className="title">{ moncv.titre_xp }</span>
            <ul>
                <li>
                { moncv.titre_xpxeno }<br />
                <span className="details">{ moncv.xpxeno }</span>
                </li>
                <li>
                { moncv.titre_xpxenostage }<br />
                <span className="details">{ moncv.xpxenostage }</span>
                </li>
                <li>
                { moncv.titre_as }<br />
                <span className="details">{ moncv.as }</span>
                </li>
                <li>
                { moncv.titre_td }<br />
                <span className="details">{ moncv.td }</span>
                </li>
                <li>
                { moncv.titre_nc }<br />
                <span className="details">{ moncv.titre_nc }</span>
                </li>
                <li>
                { moncv.titre_cours }<br />
                <span className="details">{ moncv.cours }</span>
                </li>
            </ul>
            <br /><br />
            <span className="title">{ moncv.titre_formations }</span>
            <ul>
                <li>{ moncv.titre_wcs }<br />
                <span className="details">{ moncv.wcs}</span>
                </li>
            </ul>

        </div>
      </div>
      <Footer />
        </div>
    );
};

export default cv;