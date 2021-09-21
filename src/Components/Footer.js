import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone, faCodeBranch, faUsers } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
           <div className="els">
               <p><FontAwesomeIcon icon={faAt} />: contact@louisallard.fr</p>
               <p><FontAwesomeIcon icon={faPhone} />: 07 67 82 69 67</p>
               <p><FontAwesomeIcon icon={faUsers} />: <a href="https://www.linkedin.com/in/louis-allard-devweb/" target="_blank" rel='noreferrer noopener'>Mon Linkedin</a></p>
               <p><FontAwesomeIcon icon={faCodeBranch} />: <a href="https://github.com/Louis-Allard" target="_blank" rel='noreferrer noopener'>Mon github</a></p>
           </div>
        </div>
    );
};

export default Footer;