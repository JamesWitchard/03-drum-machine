import React, {useEffect, useRef, useState} from 'react';

import "./Switch.css"

const Switch = (props) => {
    const [buttonState, setButtonState] = useState(props.buttonOn)
    const switchButton = useRef();

    useEffect(() => {
        switchButton.current.style.setProperty("float", buttonState ? "right" : "left");
    }, [buttonState]);

    function handleButtonClick() {
        if (props.label !== "Power" && !props.powered) return
        setButtonState(!buttonState);
        props.clickEvent();
    }

    return (
        <div className="switch">
            <label>{props.label}</label>
            <div className="switch-control" onClick={handleButtonClick}>
                <div className="switch-button" ref={switchButton}/>
            </div>
        </div>
    );
};

export default Switch;