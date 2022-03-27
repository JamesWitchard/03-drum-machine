import React, {useState} from 'react';
import KeyInfo from "../assets/keypad.json"
import Key from "./Key";

import "./Keypad.css"

const bankOne = KeyInfo.bankOne;
const bankTwo = KeyInfo.bankTwo;

const Keypad = () => {
    const [currentBank, setCurrentBank] = useState(bankTwo);
    return (
        <div id="keypad">
            {Object.keys(currentBank).map(item => {
                return <Key
                    keyCode={currentBank[item]['keyCode']}
                    keyTrigger={currentBank[item]['keyTrigger']}
                    keyId={currentBank[item]['id']}
                    keyUrl={currentBank[item]['url']}
                />
            })}
        </div>
    );
};

export default Keypad;