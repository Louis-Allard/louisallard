import React from 'react';
import Menu from '../Components/Menu';

const Title = (props) => {
    return (
        <div className="title">
            <Menu />
            <div className="parent">
                <h1 className="child1">{ props.text }</h1>
                <h1 className="child1 child2">{ props.text }</h1>&nbsp;
            </div>
        <hr />
    </div>
    );
};

export default Title;