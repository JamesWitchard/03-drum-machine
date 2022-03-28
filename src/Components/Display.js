import React from 'react';

import "./Display.css"

const Display = (props) => {
    return (
        <div id="display">
            <p>{props.text}</p>
        </div>
    );
};

export default Display;