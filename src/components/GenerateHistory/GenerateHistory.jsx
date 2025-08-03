import {QRCodeSVG} from "qrcode.react";
import {GENERATE_DATA} from "../../constants.js";


export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA || '[]'))
    return (
        <div>{data.map( e => {
            return (
                <p key={e}>
                    {e}
                    <QRCodeSVG value={e} size={100}/>
                </p>
            )
        })}</div>
    )
}