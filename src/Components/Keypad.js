import React, {useEffect, useState} from 'react';

import Key from "./Key";

import "./Keypad.css"

const Keypad = (props) => {
    const [currentBank, setCurrentBank] = useState(props.soundBank);

    useEffect(() => {
        setCurrentBank(props.soundBank);
    }, [props.soundBank])

    return (
        <div id="keypad">
            {Object.keys(currentBank).map(item => {
                return <Key
                    key={currentBank[item]['keyCode']}
                    powerState={props.powerState}
                    keyCode={currentBank[item]['keyCode']}
                    keyTrigger={currentBank[item]['keyTrigger']}
                    keyId={currentBank[item]['id']}
                    keyUrl={currentBank[item]['url']}
                    updater={props.updater}
                    volume={props.volume}
                />
            })}
        </div>
    );
};

export default Keypad;