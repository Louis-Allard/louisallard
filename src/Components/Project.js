import React from 'react';
import DOMPurify from 'dompurify';

const Project = (props) => {
    return (
        <div className="project">
            <img src={ props.src } alt={ props.alt } title={ props.title } /><br />
            <span className="name">{ props.name }</span>
            <div className="desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.desc) }} />
        </div>
    );
};

export default Project;