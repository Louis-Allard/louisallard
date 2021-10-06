import React from 'react';

const Podcast = (props) => {
    return (
        <div className="podcast">
            <iframe src={ props.link } height={ props.height } width={ props.width } title={ props.title } frameborder={ props.frameborder } scrolling={ props.scrolling }></iframe>
        </div>
    );
};

export default Podcast;
