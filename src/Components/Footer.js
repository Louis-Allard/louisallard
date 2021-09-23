import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilePdf, faAt, faPhone, faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
           <div className="els">
               <p><FontAwesomeIcon icon={faFilePdf} /><a href="https://cvdesignr.com/p/5e415998a2cbb" target="_blank" rel="noreferrer">&nbsp;Télécharger mon cv en pdf</a></p>
               <p><FontAwesomeIcon icon={faAt} />&nbsp;contact@louisallard.fr</p>
               <p><FontAwesomeIcon icon={faPhone} />&nbsp;07 67 82 69 67</p>
               <p><FontAwesomeIcon icon={faUsers} />&nbsp;<a href="https://www.linkedin.com/in/louis-allard-devweb/" target="_blank" rel='noreferrer noopener'>Mon Linkedin</a></p>
               <p><FontAwesomeIcon icon={faCodeBranch} />&nbsp;<a href="https://github.com/Louis-Allard" target="_blank" rel='noreferrer noopener'>Mon github</a></p>
           </div>
        </div>
    );
};

export default Footer;