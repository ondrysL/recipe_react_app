import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddAlertIcon from '@mui/icons-material/AddAlert';

const Footer = () => {
    return <footer className='footer__container'>
        <h1 className='footer__title'>Cookies</h1>
        <ul className='footer__box'>
            <li>
                <a><p>See socials</p><InstagramIcon sx={{fontSize:50}}></InstagramIcon></a>
            </li>
            <li><a><p>Contact us</p><CallIcon sx={{fontSize:50}}></CallIcon></a></li>
            <li><a><p>Lorem</p><AddAlertIcon sx={{fontSize:50}}></AddAlertIcon></a></li>
            <li><a><p>Ipsum</p><PersonAddAltIcon sx={{fontSize:50}}></PersonAddAltIcon></a></li>
        </ul>
    </footer>
}

export default Footer