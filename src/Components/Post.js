import React from 'react';
import DOMPurify from 'dompurify';

const Post = (props) => {
    return (
        <div className="post">
           <div className="border" />
           <div className="container">
                <span className="title">{ props.title }</span><br />
                <span className="date">{ props.date }</span>
                <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.content) }} />
           </div>
        </div>
    );
};

export default Post;