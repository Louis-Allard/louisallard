import React from 'react';
import Menu from '../Components/Menu';

const Title = (props) => {
    return (
        <div className="title">
            <Menu />
            <div className="parent">
                <h1 className="child1">{ props.text }</h1>
                <h1 className="child2">{ props.text }</h1>&nbsp;
            </div>
        <div className="hr" />
    </div>
    );
};

export default Title;