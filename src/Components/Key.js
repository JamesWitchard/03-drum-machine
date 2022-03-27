import React, {useRef} from 'react';

const Key = (props) => {
    const clipRef = useRef();


    return (
        <div>
            <button key={props.keyCode } className="drum-pad" id={props.keyId} onClick={() => clipRef.current.play()}>
                <label >{props.keyTrigger}</label>
                <audio src={props.keyUrl} className="clip" id={props.keyTrigger} ref={clipRef}/>
            </button>
        </div>
    );
};

export default Key;