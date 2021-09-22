import React from 'react';
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Title from '../Components/Title';
import photo from "../assets/moi2.jpeg";
import { parcours } from '../lng/fr';
import Footer from '../Components/Footer';

const cv = () => {
    return (
        <div className="cv">
            <Title text="Mon Parcours" />
            <div className="data-container">
            <div className="whoami">
                <div className="pic">
                    <img src={ photo } alt="moi" />
                    <div className="contact">
                        <p>Mon email ? contact@louisallard.fr</p>
                        <p>Où suis-je ? 59700 Marcq-en-Baroeul</p>
                        <p><FontAwesomeIcon icon={faFilePdf} />&nbsp;<a href="https://cvdesignr.com/p/5e415998a2cbb" target="_blank" rel="noreferrer">Télécharger mon cv en pdf</a></p>
                    </div>
                </div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parcours.desc) }}>
            </div>
        </div>
        <hr />
        <div className="parcours">
            <span className="title">Mes expériences</span>
            <ul>
                <li>
                2020 Développeur web <br />
                <span className="details">Développeur web chez Slaask: www.xenoapp.com. Conception de features sur les chatbox.</span>
                </li>
                <li>
                2019 Développeur web stagiaire<br />
                <span className="details">Stagiaire en développement web chez Slaask.</span>
                </li>
                <li>
                2016-2018 Gérant de Alfa Services<br />
                <span className="details">Entreprise de formations technique à destination des professionnels.</span>
                </li>
                <li>
                2011-2015 Développeur web PHP<br />
                <span className="details">Développeur web PHP à Trenois Decamps. Création du site www.trenois.com, frontend et backend en php/mysql. Création également du site intranet et création du site de recrutement www.recrutement-trenois.com</span>
                </li>
                <li>
                2013-2017 Coordinateur de région<br />
                <span className="details">Co-délégué régional pour un mouvement d'initiative citoyenne, dans la région Haut-de-France et correspondant presse.</span>
                </li>
                <li>
                2010-2012 Cours et dépannage Informatique.<br />
                <span className="details">Cours d'informatique à domicile, à l'intention des seniors et dépannage chez les particuliers.</span>
                </li>
            </ul>
            <br /><br />
            <span className="title">Mes formations</span>
            <ul>
                <li>2019 Développeur Web Javascript : Wild Code School de Lille<br />
                <span className="details">Apprentissage de Javascript, de Node.Js et de React.Js.
Conception de sites internets dans le cadre des projets professionnels, réalisés en équipe via l'intégration des méthodes Agiles de gestion de projet.</span>
                </li>
            </ul>

        </div>
      </div>
      <Footer />
        </div>
    );
};

export default cv;