import React from 'react';
import Menu from '../Components/Menu';
import { title } from "../lng/fr.js";

const Title = () => {
    return (
        <div className="title">
            <Menu />
            <div className="parent">
                <h1 className="child1">{ title.main }</h1>
                <h1 className="child1 child2">{ title.main }</h1>
>             </div>
        <hr />
    </div>
    );
};

export default Title;