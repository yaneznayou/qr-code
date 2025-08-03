import {SCAN_DATA} from "../../constants.js";
import {QRCodeSVG} from "qrcode.react";
export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA || '[]'))
    return (
        <div>
            {data.map( e => {
                return (
                    <p key={e}>
                        {e}
                        <QRCodeSVG value={e} size={100}/>
                    </p>
                )
            })}
        </div>
    )
}