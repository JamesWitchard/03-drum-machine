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
        clipRef.current.parentElement.classList.toggle("clicked");
        props.updater(props.keyId);
        clipRef.current.currentTime = 0;
        clipRef.current.play();
        setTimeout(() => clipRef.current.parentElement.classList.toggle("clicked"), 100);
    }

    function handleKeyPress(e) {
        if (e.key.toUpperCase().charCodeAt(0) !== props.keyCode) return;
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