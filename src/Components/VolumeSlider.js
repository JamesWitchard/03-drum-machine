import React, {useState} from 'react';

import "./VolumeSlider.css"

const VolumeSlider = (props) => {
    const [value, setValue] = useState(props.value);

    function handleOnChange(e) {
        if (!props.powered) return;
        setValue(e.target.value);
        props.updater[0](e.target.value);
        props.updater[1](`Volume: ${Math.round(e.target.value * 100)}`);
    }

    return (
        <div id="slider">
            <input type="range" value={value} min="0" max="1" step="0.01" onChange={handleOnChange}/>
        </div>
    );
};

export default VolumeSlider;