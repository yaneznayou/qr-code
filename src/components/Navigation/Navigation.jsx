import {Link} from "react-router-dom";
import './Navigation.module.css'
export function Navigation() {
    return(
        <nav style={{display:'flex', flexDirection:'colum', justifyContent:'center', gap:10}}>
            <Link to='/generator' className='link'>Generate QR Code</Link>
            <Link to='/scanner' className='link'>Scan QR Code</Link>
            <Link to='/history-generate' className='link'>History of generate QR Code</Link>
            <Link to='/history-scanning' className='link'>History of scanning QR Code</Link>
        </nav>
    )
}