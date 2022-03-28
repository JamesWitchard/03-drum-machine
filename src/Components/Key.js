import React, {useEffect, useRef} from 'react';

import "./Key.css"

const Key = (props) => {
    const clipRef = useRef();

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [props.keyId, props.powerState, handleKeyPress])
    useEffect(() => {
        clipRef.current.volume = props.volume;
    }, [props.volume]);

    useEffect(() => {
        clipRef.current.pause();
    }, [props.powerState])

    function handleClick() {
        if (!props.powerState) return;
        props.updater(props.keyId);
        clipRef.current.currentTime = 0;
        clipRef.current.play();
    }

    function handleKeyPress(e) {
        console.log(e.key.charCodeAt(0) - 32);
        if ((e.key.charCodeAt(0) - 32) !== props.keyCode) return;
        handleClick();
    }

    return (
        <>
            <div className="drum-pad" id={props.keyId} onMouseUp={handleClick} onKeyPress={handleKeyPress}>
                <label>{props.keyTrigger}</label>
                <audio src={props.keyUrl} className="clip" id={props.keyTrigger}
                       ref={clipRef}/>
            </div>
        </>
    );


};

export default Key;