import {QRCodeSVG} from "qrcode.react";
import {useState} from "react";
import s from './qrCodeGenerator.module.css';
import {SCAN_DATA} from "../../constants.js";
import {GENERATE_DATA} from "../../constants.js";


export const QrCodeGenerator = () => {
    const [inputValue, setInputValue] = useState('');
    const [showQr, setShowQr] = useState('');


    function onClickHandler() {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputValue]))
        setShowQr(inputValue);
        setInputValue('');

    }
return(
    <div className={s.container}>


        <input
            type='text'
            className={s.input}
            placeholder='put text or valid link'
            value={inputValue}
            onChange={(event) => {
            setInputValue(event.currentTarget.value)
        }}/>
        <button type='button' onClick={onClickHandler} className={s.button}>Generate QR</button>
        {showQr !== '' && <QRCodeSVG value={showQr}/>}
    </div>
)
}