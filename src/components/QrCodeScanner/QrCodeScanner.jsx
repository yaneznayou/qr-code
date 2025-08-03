import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import s from './QrCodeScanner.module.css'
import {SCAN_DATA} from '../../constants.js'

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)
const handlerScan = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
}
const settings ={
    audio:false,
}

return (

    <div className={s.container}>

        <Scanner
            onScan={handlerScan }
            components={settings}
            styles={{
                container: {
                    width:300
                }
            }}
        />
        <p className={s.result}>{scanned}</p>
    </div>
);
};