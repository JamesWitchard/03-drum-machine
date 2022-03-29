import React, {useState} from 'react';

import Keypad from "./Keypad";
import Switch from "./Switch";
import Display from "./Display";

import "./DrumMachine.css";
import KeyInfo from "../assets/keypad.json"
import VolumeSlider from "./VolumeSlider";

const bankOne = KeyInfo.bankOne;
const bankTwo = KeyInfo.bankTwo;

const DrumMachine = () => {
    const [powerState, setPowerState] = useState(true);
    const [bankState, setBankState] = useState(false);
    const [currentBank, setCurrentBank] = useState(bankOne);
    const [displayText, setDisplayText] = useState("");
    const [volume, setVolume] = useState(0.25);

    function powerClick() {
        setPowerState(!powerState)
        updateDisplay("")
    }

    function bankClick() {
        setCurrentBank(bankState ? bankOne : bankTwo);
        setBankState(!bankState);
        updateDisplay(bankState ? "Heater Kit" : "Smooth Piano Kit")
    }

    function updateDisplay(newText = displayText) {
        setDisplayText(newText);
    }

    function updateVolume(newVol = volume) {
        setVolume(newVol);
    }

    return (
        <div className="innerContainer">
            <div className="toolbar">
                <h3><em>DRUM MACHINE <i className="fa fa-headphones"/></em></h3>
            </div>
            <div className="content">
                <Keypad
                    soundBank={currentBank}
                    powerState={powerState}
                    updater={updateDisplay}
                    volume={volume}
                />
                <div className="control-panel">

                    <Switch
                        label="Power"
                        clickEvent={powerClick}
                        buttonOn={powerState}
                    />
                    <Display
                        text={displayText}
                    />
                    <VolumeSlider
                        value={volume}
                        powered={powerState}
                        updater={[updateVolume, updateDisplay]}
                    />
                    <Switch
                        label="Bank"
                        clickEvent={bankClick}
                        buttonOn={bankState}
                        powered={powerState}
                    />
                </div>
            </div>
        </div>
    );
};

export default DrumMachine;