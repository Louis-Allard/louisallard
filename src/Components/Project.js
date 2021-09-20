import React from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <img src={ props.src } alt={ props.alt } title={ props.title } desc={ props.desc } />
        </div>
    );
};

export default Project;