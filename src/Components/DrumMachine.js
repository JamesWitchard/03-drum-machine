import React from 'react';

import "./DrumMachine.css";
import Keypad from "./Keypad";

const DrumMachine = () => {
    return (
        <>
            <div className="toolbar">
                <h3><em>WITCHETTY <i className="fa fa-headphones"/></em></h3>
            </div>
            <Keypad />
        </>
    );
};

export default DrumMachine;