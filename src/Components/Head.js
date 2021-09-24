import React from 'react';
import { Helmet } from "react-helmet";

const head = (props) => {
    return (
        <div className="helmet">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Louis Allard - {props.title}</title>
            </Helmet>
        </div>
    );
};

export default head;